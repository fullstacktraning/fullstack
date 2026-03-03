import {Link,BrowserRouter,Routes,Route} from "react-router-dom"
import Laptops from "./Laptops.jsx";
import Dell from "./Dell.jsx";
import Hp from "./Hp.jsx"
const Master = ()=>{
    return(
        <>
            <BrowserRouter>
                <Link to="/laptops/111/pone/10000" style={{marginRight:200}}>
                    Laptops
                </Link>



                <Routes>
                   
                    <Route path="/laptops/:pid/:pname/:pcost" element={<Laptops></Laptops>}>
                        <Route path="laptops/dell/:processor/:harddisk/:generation" element={<Dell></Dell>}></Route>
                        <Route path="laptops/hp" element={<Hp></Hp>}></Route>
                    </Route>

                    
                    
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Master;