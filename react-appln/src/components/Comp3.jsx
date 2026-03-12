import { lazy } from "react";

const Comp2 = lazy(()=>import("./Comp2.jsx"))

const Comp3 = ()=>{
    return(
        <>
            <Comp2></Comp2>
            <h1>Comp3</h1>
        </>
    )
}
export default Comp3;