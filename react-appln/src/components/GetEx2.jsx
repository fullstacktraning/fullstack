import axios from "axios";
import { useEffect, useState } from "react";
const GetEx2 = ()=>{
    const [num1,setNum1] = useState(null);
    const [arr,setArr] = useState([]);
    const test_func = async ()=>{
        const {data} = await axios.get(`https://dummyjson.com/products`,{headers:{
            "User-Agent": "ReactApp",
            "Test-Header": "Demo"
        }});
        const {limit,products,skip,total} = data;
        setNum1(limit);
        setArr(products);
    }
    useEffect(()=>{
        test_func()
    },[]);
    return(
        <>
            <p>{num1}</p>
            <p>{JSON.stringify(arr)}</p>
        </>
    )
}
export default GetEx2;