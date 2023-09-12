import { Breadcrumb, Button, Card, Col, Container, Form, FormControl, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { FaPaperPlane, FaPlus, FaTrash } from "react-icons/fa";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { bannerSvc } from ".";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
const AdminBannerEdit = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false );
    const [detail, setDetail] = useState();
    const params = useParams()
    const bannerSchema  = Yup.object({
        title:Yup.string().required(),
        link: Yup.string().url().nullable(),
        status: Yup.string().matches(/active|inactive/).default('active'),
        

    })
    const {register,handleSubmit,formState: {errors},setError, setValue, watch} = useForm({
        resolver: yupResolver(bannerSchema)
    })
    const submitEvent = async (data)=>{
        try{
            setLoading(true);
            
                let response = await bannerSvc.updateBanner(data, params.id)
                toast.success(response.data.msg) 
                navigate("/admin/banner")
            

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
    const getDetails = async()=> {
        try{
            let response = await bannerSvc.getBannerById(params.id)
            setValue("title", response.data.data.title)
            setValue("link", response.data.data.link)
            setValue("status", response.data.data.status)
            setDetail(response.data.data ) 

        } catch(exception){
            toast.error("banner doesnot exist")
            navigate("/admin/banner")

        }
    }
    useEffect(()=>{
        getDetails()
    }, [])
    
  return (
    <>
      <Container className="px-4" fluid>
        <h1 className="mt-4">Banner Edit </h1>
        <Breadcrumb className="mb-4">
          <li className="breadcum-item">
            <NavLink to="/admin">Dashboard</NavLink>
          </li>
          <li className="breadcrumb-item">
            <NavLink to="/admin/banner">Banner List</NavLink>
          </li>
          <li className="breadcrumb-item active">banner form</li>
        </Breadcrumb>
        <Card className="mb-4">
          <Card.Header>
            <Container>
              <Row>
                <Col sm={12} md={6}>
                  <h4>Banner List</h4>
                </Col>
                <Col sm={12} md={6}>
                  <NavLink
                    className={"btn btn-sm btn-success float-end"}
                    to="/admin/banner/Edit" >
                    <FaPlus /> Add Banner
                  </NavLink>
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
                                        
                                        {...register("title", {required:true })}


                                    />
                                    <span className="text-danger">
                                        {
                                        (errors && errors.title?.message) ? errors.title.message : ' '
                                        }
                                    </span>
                                
                                </Col>

                            </Form.Group>
                            <Form.Group className="row mb-3">
                                <Form.Label className="col-sm-3">Link: </Form.Label>
                                <Col sm={9}>
                                    <Form.Control
                                        size="sm"
                                        type= "url"
                                        placeholder="Enter link"
                                        {...register("link", {required:false})}


                                    />
                                    <span className="text-danger">
                                        {
                                        (errors && errors.link?.message) ? errors.link.message : ' '
                                        }
                                    </span>
                                
                                </Col>

                            </Form.Group>

                            <Form.Group className="row mb-3">
                                <Form.Label className="col-sm-3">Status: </Form.Label>
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
                                <Col sm={7}>
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
                                <Col sm = {2}>
                                    {
                                        detail && detail.image 
                                        ?
                                         <img src={import.meta.env.VITE_IMAGE_URL+'/uploads/banner/'+detail.image} className="img img-fluid"/>
                                         : <></>
                                    }
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
export default AdminBannerEdit;
