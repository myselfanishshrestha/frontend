import AdminProductList from "./product-list.page";
import AdminProductCreate from "./product-create.page";
import ProductService from "./product.service";

const productSvc = new ProductService()

export{
    AdminProductList,
    AdminProductCreate,
    productSvc
}