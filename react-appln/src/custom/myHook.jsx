import { useState } from "react";

const myHook = (num)=>{
    const [count,setCount] = useState(num);
    const increment = ()=>{
        setCount(count+1);
    }
    const decrement  = ()=>{
        setCount(count-1);
    }
    const reset = ()=>{
        setCount(0)
    }
    return {count,increment,decrement,reset};
}
export default myHook;