import { useState } from "react";
import Child2 from "./Child2.jsx"
const Parent2 = ()=>{
    const [arr,setArr] = useState([10,20,30,40,50]);
    const [flag,setFlag] = useState(true);
    return(
        <>
            <Child2 arr={arr} flag={flag}></Child2>
            {/**
             *  1) string
             *  2) number
             *  3) object
             *  4) list of objects
             */}
        </>
    )
}
export default Parent2;