import { useState } from "react";
const ControlledComp = ()=>{
    const [name,setName] = useState("");
    const register = (event)=>{
        event.preventDefault();
        console.log(name);
    }
    return(
        <>
            <form onSubmit={register}>
                <input type="text"
                       value={name}
                       name="username"
                       onChange={(event)=>setName(event.target.value)}></input>
                <input type="submit" value={"Register"}></input>
            </form>
        </>
    )
}
export default ControlledComp;