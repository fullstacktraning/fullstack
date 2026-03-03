import { Link, Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";

const Laptops = ()=>{
    const {pid,pname,pcost} = useParams();
    return(
        <>
            <h1>Laptops Soon...!{pid}...{pname}...{pcost}</h1>
            <Link to="laptops/dell/i5/1tb/11th" style={{marginRight:200}}>Dell</Link>
            <Link to="laptops/hp">Hp</Link>
            <br></br>
            <Outlet></Outlet>
        </>
    )
}
export default Laptops;