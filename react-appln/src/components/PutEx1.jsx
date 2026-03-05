import axios from "axios"
import { useEffect } from "react";
const PutEx1 = ()=>{
    
    const make_put_call = async ()=>{
        const {data} = await axios.put(`https://jsonplaceholder.typicode.com/posts/1`,{
                                    id: 1,
                                    title: "Updated Title",
                                    body: "Updated body content",
                                    userId: 1
        });
        console.log(data);
    }
    useEffect(()=>{
        make_put_call();
    },[]);
    
    return(
        <>
            
        </>
    )
}
export default PutEx1;