import { Link, Outlet } from "react-router-dom";

const Laptops = ()=>{
    return(
        <>
            <h1>Laptops Soon...!</h1>
            <Link to="laptops/dell" style={{marginRight:200}}>Dell</Link>
            <Link to="laptops/hp">Hp</Link>
            <br></br>
            <Outlet></Outlet>
        </>
    )
}
export default Laptops;