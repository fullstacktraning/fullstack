const BootStrap = ()=>{
    return(
        <>
            <h1 className="text text-success">Hello,BootStrap</h1>
            <h1 className="text text-danger">Hello,Frontend</h1>

            <p style={{color:"yellow",backgroundColor:"red"}}>Hello</p>

            <p onMouseDown={()=>console.log("Hello, MouseDown")}
               onMouseLeave={()=>console.log("Welcome")}>Hello</p>

            <h2 className="c1">Hello</h2>
        </>
    )
}
export default BootStrap;