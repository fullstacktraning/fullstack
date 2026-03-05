import axios from "axios"
import { useEffect } from "react";
const PostEx2 = ()=>{
    const make_post_api_call = async ()=>{
        const {data} = await axios.post("https://jsonplaceholder.typicode.com/posts",
                                        {"name":"abc","role":"def"},
                                        {
                                            headers:{
                                                "Content-Type": "application/json",
                                                "Authorization": "Bearer dummy_token_123",
                                                "X-Custom-Header": "student-api-test"
                                            }
                                        });
        console.log(data)
    }
    useEffect(()=>{
        make_post_api_call()
    },[]);

    return(
        <>
            
        </>
    )
}
export default PostEx2;