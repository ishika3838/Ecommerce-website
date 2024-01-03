import Navbar from "../features/navbar/Navbar";
import ProductList from "../features/product/components/ProductList"
 function HomePage () {
    return (  
        
        <div>
            {/** navbar children */}
             {/*a complete webpage designing part  */}
            <Navbar>
            <ProductList></ProductList>
            </Navbar>
        </div>
    );
}

export default HomePage ;