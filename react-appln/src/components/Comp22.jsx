import { useContext } from "react";
import Global1 from "../global/Global1";

const Comp22 = ()=>{
    const msg = useContext(Global1);
    return(
        <>
            <h1>{msg}</h1>
        </>
    )
}
export default Comp22;