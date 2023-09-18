import {Breadcrumb,Button, Card,Col,Container,Form,FormControl,Row,} from "react-bootstrap";
import { useForm } from "react-hook-form";
import { FaPaperPlane, FaPlus, FaTrash } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { productSvc } from ".";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import Select from "react-select";
import { categorySvc } from "../category";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { brandSvc } from "../brand";
import { userSvc } from "../user";
const AdminProductCreate = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [listOfCat, setListOfCat] = useState();
  const [brand, setBrand] =useState();
  const [seller, setSeller] = useState();
  const productSchema = Yup.object({
    title: Yup.string().required(),
    categories: Yup.string().required(),

    description: Yup.string().nullable(),
    costPrice: Yup.number().min(1).required,
    price: Yup.number().min(1).required(),
    discount: Yup.number().min(0).default(0),
    brand: Yup.string().nullable(),

    status: Yup.string()
      .matches(/active|inactive/)
      .default("active"),
    sellerId: Yup.string().nullable(),
    // image: Yup.string().required()
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
    watch,
  } = useForm({
    resolver: yupResolver(productSchema),
  });
  const submitEvent = async (data) => {
    try {
      setLoading(true);
      if (!data.image) {
        setError("image", { message: "image is required" });
      } else {
        let response = await productSvc.createProduct(data);
        toast.success(response.data.msg);
        navigate("/admin/product");
      }
    } catch (exception) {
      toast.error(exception.data?.msg);
    } finally {
      setLoading(false);
    }
  };

  const handleImage = (e) => {
    let image = e.target.files[0];

    //valideate
    let ext = image.name.split(".").pop();
    let size = image.size;
    let allow = ["jpg", "jpeg", "png", "svg"];
    if (allow.includes(ext.toLowerCase())) {
      if (size <= 3000000) {
        setValue("image", image);
      } else {
        setError("image", "file size should be less than 3 mb");
      }
    } else {
      setError("image", "image format not supported");
    }
  };
  const listAllCAts = async () => {
    try {
      const list = await categorySvc.listAllCategoryList();
      let formattedData = [];
      if (list.data.data) {
        formattedData = list.data.data.map((item) => {
          return {
            value: item._id,
            label: item.name,
          };
        }); 
      }
      setListOfCat(formattedData);
    } catch (exception) {}
  };


  const listAllBrands = async ()=>{
    try{
        let response = await brandSvc.listAllBrandList()
        setBrand(response.data.data)

    } catch(err){

    }
  }

  const listAllSellers = async ()=> {
    try{
        let response = await userSvc.getUserByType('seller')
        setSeller(response.data.data)


    }catch (exception){

    }
  }


  useEffect(() => {
    listAllCAts();
    listAllBrands() 
    listAllSellers()
     
  }, []);
  return (
    <>
      <Container className="px-4" fluid>
        <h1 className="mt-4">Product create </h1>
        <Breadcrumb className="mb-4">
          <li className="breadcum-item">
            <NavLink to="/admin">Dashboard</NavLink>
          </li>
          <li className="breadcrumb-item">
            <NavLink to="/admin/product">Product List</NavLink>
          </li>
          <li className="breadcrumb-item active">product form</li>
        </Breadcrumb>
        <Card className="mb-4">
          <Card.Header>
            <Container fluid>
              <Row>
                <Col sm={12} md={6}>
                  <h4>Product List</h4>
                </Col>
              </Row>
            </Container>
          </Card.Header>
          <Card.Body>
            <Container>
              <Row>
                <Col sm={12}>
                  <Form onSubmit={handleSubmit(submitEvent)}>
                    <Form.Group className="row mb-3">
                      <Form.Label className="col-sm-3">Title: </Form.Label>
                      <Col sm={9}>
                        <Form.Control
                          size="sm"
                          placeholder="Enter title"
                          {...register("title", { required: true })}
                        />
                        <span className="text-danger">
                          {errors && errors.title?.message
                            ? errors.title.message
                            : " "}
                        </span>
                      </Col>
                    </Form.Group>

                    <Form.Group className="row mb-3">
                      <Form.Label className="col-sm-3">
                        {" "}
                        categories: :{" "}
                      </Form.Label>
                      <Col sm={9}>
                        <Select
                          isMulti
                          name="category"
                          options={listOfCat}
                          className="basic-multi-select"
                          classNamePrefix="select"
                          {...register('categories', {required: true})}
                        />

                        <span className="text-danger">
                          {errors && errors.categories?.message
                            ? errors.categories.message
                            : " "}
                        </span>
                      </Col>
                    </Form.Group>

                    <Form.Group className="row mb-3">
                      <Form.Label className="col-sm-3">
                        {" "}
                        Description: :{" "}
                      </Form.Label>
                      <Col sm={9}>
                        <CKEditor
                          editor={ClassicEditor}
                          data=""
                          onChange={(event, editor) => {
                            const data = editor.getData();
                            setValue("description", data);
                           
                          }}
                        />

                        <span className="text-danger">
                          {errors && errors.description?.message
                            ? errors.description.message
                            : " "}
                        </span>
                      </Col>
                    </Form.Group>

                    <Form.Group className="row mb-3">
                      <Form.Label className="col-sm-3">Cost Price: </Form.Label>
                      <Col sm={9}>
                        <Form.Control
                          size="sm"
                          type="number"
                          placeholder="Enter product CP"
                          {...register("costPrice", { required: true })}
                        />
                        <span className="text-danger">
                          {errors && errors.costPrice?.message
                            ? errors.costPrice.message
                            : " "}
                        </span>
                      </Col>
                    </Form.Group>

                    <Form.Group className="row mb-3">
                      <Form.Label className="col-sm-3"> Price: </Form.Label>
                      <Col sm={9}>
                        <Form.Control
                          size="sm"
                          type="number"
                          placeholder="Enter product price"
                          min={1}
                          {...register("price", { required: true })}
                        />
                        <span className="text-danger">
                          {errors && errors.price?.message
                            ? errors.price.message
                            : " "}
                        </span>
                      </Col>
                    </Form.Group>

                    <Form.Group className="row mb-3">
                      <Form.Label className="col-sm-3">
                        {" "}
                        Discount(%):{" "}
                      </Form.Label>
                      <Col sm={9}>
                        <Form.Control
                          size="sm"
                          type="number"
                          placeholder="Enter product dis"
                          min={0}
                          {...register("discount")}
                        />
                        <span className="text-danger">
                          {errors && errors.discount?.message
                            ? errors.discount.message
                            : " "}
                        </span>
                      </Col>
                    </Form.Group>

                    <Form.Group className="row mb-3">
                      <Form.Label className="col-sm-3">Brand: </Form.Label>
                      <Col sm={9}>
                        <Form.Select
                          size="sm"
                          {...register("brand")}
                        >
                            <option value="">---select any one----</option>
                            
                            {
                            brand && brand.map((item, i) =>(
                                <option key ={i} value ={item._id}> {item.title}</option>
                            ))
                        }


                        </Form.Select>
                        <span className="text-danger">
                          {errors && errors.brand?.message
                            ? errors.brand.message
                            : " "}
                        </span>
                      </Col>
                    </Form.Group>

                    <Form.Group className="row mb-3">
                      <Form.Label className="col-sm-3">Seller: </Form.Label>
                      <Col sm={9}>
                        <Form.Select
                          size="sm"
                          {...register("sellerId")}
                        >
                             <option value="">---select any one----</option>
                            
                            {
                            seller && seller.map((item, i) =>(
                                <option key ={i} value ={item._id}> {item.name}</option>
                            ))
                        }

                        </Form.Select>
                        <span className="text-danger">
                          {errors && errors.sellerId?.message
                            ? errors.sellerId.message
                            : " "}
                        </span>
                      </Col>
                    </Form.Group>

                    <Form.Group className="row mb-3">
                      <Form.Label className="col-sm-3">Status: </Form.Label>
                      <Col sm={9}>
                        <Form.Select
                          size="sm"
                          {...register("status", {
                            required: true,
                            value: "active",
                          })}
                        >
                          <option value={"active"}>Publish</option>
                          <option value={"inactive"}>UN-Publish</option>
                        </Form.Select>
                        <span className="text-danger">
                          {errors && errors.status?.message
                            ? errors.status.message
                            : " "}
                        </span>
                      </Col>
                    </Form.Group>

                    <Form.Group className="row mb-3">
                      <Form.Label className="col-sm-3">Image: </Form.Label>
                      <Col sm={9}>
                        <Form.Control
                          size="sm"
                          type="file"
                          multiple
                          // {...register("image", {required:true})}
                          onChange={handleImage}
                        />
                        <span className="text-danger">
                          {errors && errors.images?.message
                            ? errors.images.message
                            : " "}
                        </span>
                      </Col>
                    </Form.Group>

                    <Form.Group className="row mb-3">
                      <Col sm={{ offset: 3, span: 9 }}>
                        <Button
                          variant="success"
                          type="submit"
                          size="sm"
                          disabled={loading}
                          className="me-3"
                        >
                          <FaPaperPlane /> Submit
                        </Button>
                        <Button
                          variant="danger"
                          type="reset"
                          size="sm"
                          className="me-3"
                        >
                          <FaTrash /> Cancel
                        </Button>
                      </Col>
                    </Form.Group>
                  </Form>
                </Col>
              </Row>
            </Container>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default AdminProductCreate;
