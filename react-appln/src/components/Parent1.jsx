import Child1 from "./Child1.jsx"
const Parent1 = ()=>{
    return(
        <>
            <Child1 key1={"Hello"} key2={100}></Child1>
            {/**
             * boolean
             * list
             * object
             * list of objects
             */}
        </>
    )
}
export default Parent1;