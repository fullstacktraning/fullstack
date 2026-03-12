import { useRef } from "react";

const UnControlled = ()=>{
    const ref1 = useRef(null);
    const register = (event)=>{
       event.preventDefault();
       console.log(ref1.current.value) 
    }
    return(
        <>
            <form onSubmit={register}>
                <input ref={ref1} placeholder="enter user name"></input>
                <input type="submit" value={"Register"}></input>
            </form>
        </>
    )
}
export default UnControlled;