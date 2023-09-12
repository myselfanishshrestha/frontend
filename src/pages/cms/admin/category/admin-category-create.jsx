import { Breadcrumb, Button, Card, Col, Container, Form, FormControl, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { FaPaperPlane, FaPlus, FaTrash } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { categorySvc } from ".";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
const AdminCategoryCreate = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false );
    const [listOfCat, setListOfCat] = useState();
    const categorySchema  = Yup.object({
        name:Yup.string().required(),
        parent:Yup.string().nullable(),
       
        status: Yup.string().matches(/active|inactive/).default('active'),
        // image: Yup.string().required()

    })
    const {register,handleSubmit,formState: {errors},setError, setValue, watch} = useForm({
        resolver: yupResolver(categorySchema)
    })
    const submitEvent = async (data)=>{
        try{
            setLoading(true);
            if (!data.image){
                setError('image', {message: "image is required"})
            } else {
                let response = await categorySvc.createCategory(data)
                toast.success(response.data.msg) 
                navigate("/admin/category")
            }

        }catch (exception){
            toast.error(exception.data?.msg)

        } finally{
            setLoading(false);
        }
        
    }

    const handleImage = (e) => {
        let image =e.target.files[0];
        

        //valideate
        let ext =( image.name.split('.')).pop();
        let size = image.size;
        let allow=['jpg', 'jpeg','png', 'svg']
        if(allow.includes(ext.toLowerCase())){
            if(size<=3000000){
                setValue('image', image)

            }else{
                setError("image", "file size should be less than 3 mb")
            }

        }else {
            setError("image", "image format not supported")

        }

    }
    const listAllCAts = async ()=>{
        try{
            const list = await categorySvc.listAllCategoryList()
            setListOfCat(list.data.data)

        }catch (exception){

        }
    }
    useEffect(()=>{
        listAllCAts()
    }, [])
  return (
    <>
      <Container className="px-4" fluid>
        <h1 className="mt-4">Category create </h1>
        <Breadcrumb className="mb-4">
          <li className="breadcum-item">
            <NavLink to="/admin">Dashboard</NavLink>
          </li>
          <li className="breadcrumb-item">
            <NavLink to="/admin/category">Category List</NavLink>
          </li>
          <li className="breadcrumb-item active">category form</li>
        </Breadcrumb>
        <Card className="mb-4">
          <Card.Header>
            <Container>
              <Row>
                <Col sm={12} md={6}>
                  <h4>Category List</h4>
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
                                <Form.Label className="col-sm-3">Name: </Form.Label>
                                <Col sm={9}>
                                    <Form.Control
                                        size="sm"
                                        placeholder="Enter name"
                                        {...register("name", {required:true})}


                                    />
                                    <span className="text-danger">
                                        {
                                        (errors && errors.name?.message) ? errors.name.message : ' '
                                        }
                                    </span>
                                
                                </Col>

                            </Form.Group>
                           

                            <Form.Group className="row mb-3">
                                <Form.Label className="col-sm-3">Status: </Form.Label>
                                <Col sm={9}>
                                    <Form.Select size="sm" {...register('parent', {required: false, value:"active"})}>
                                        <option value={""}>---Select one ---</option>
                                        {
                                            listOfCat && listOfCat.map((cat, i)=>(
                                                <option key={i} value={cat._id}>{cat.name}</option>
                                            ))
                                        }
                                    </Form.Select>
                                    <span className="text-danger">
                                        {
                                        (errors && errors.parent?.message) ? errors.title.message : ' '
                                        }
                                    </span>
                                
                                </Col>

                            </Form.Group>
                            <Form.Group className="row mb-3">
                                <Form.Label className="col-sm-3">Parent: </Form.Label>
                                <Col sm={9}>
                                    <Form.Select size="sm" {...register('status', {required: true, value:"active"})}>
                                        <option value={"active"}>Publish</option>
                                        <option value={"inactive"}>UN-Publish</option>
                                    </Form.Select>
                                    <span className="text-danger">
                                        {
                                        (errors && errors.status?.message) ? errors.title.message : ' '
                                        }
                                    </span>
                                
                                </Col>

                            </Form.Group>

                            <Form.Group className="row mb-3">
                                <Form.Label className="col-sm-3">Image: </Form.Label>
                                <Col sm={9}>
                                    <Form.Control
                                        size="sm"
                                        type= "file"
                                      
                                        // {...register("image", {required:true})}
                                        onChange={handleImage}



                                    />
                                    <span className="text-danger">
                                        {
                                        (errors && errors.image?.message) ? errors.image.message : ' '
                                        }
                                    </span>
                                
                                </Col>

                            </Form.Group>

                            <Form.Group className="row mb-3">
                                
                                <Col sm={{offset:3, span:9}}>
                                    <Button variant="success" type="submit" size="sm"  disabled={loading} className="me-3">
                                        <FaPaperPlane/> Submit
                                    </Button>
                                    <Button variant="danger" type="reset" size="sm"  className="me-3">
                                        <FaTrash/> Cancel
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
export default AdminCategoryCreate;
