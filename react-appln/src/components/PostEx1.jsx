import { useRef, useState } from "react";
import axios from "axios"
const PostEx1 = ()=>{
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const [res,setRes] = useState({});
    const post_ex = async ()=>{
        const {data} = await axios.post("https://jsonplaceholder.typicode.com/posts",{
            "title":ref1.current.value,
            "body":ref2.current.value,
            "userId":parseInt(ref3.current.value)
        });
        setRes(data);
    }
    return(
        <>
            <fieldset>
                <legend>POSTEX</legend>
                <input type="text" ref={ref1} placeholder="enter title..."></input>
                <br></br><br></br>
                <input type="text" ref={ref2} placeholder="enter body..."></input>
                <br></br><br></br>
                <input type="number" ref={ref3} placeholder="enter userId..."></input>
                <br></br><br></br>
                <button onClick={post_ex}>Post</button>
                <br></br><br></br>
                <p>{JSON.stringify(res)}</p>
            </fieldset>
        </>
    )
}
export default PostEx1;