const Events = ()=>{
    const func_one = ()=>{
        console.log("Button1 Clicked")
    }
    const func_two = (username,password)=>{
        username == "admin" && password == "admin@123" ? console.log("Login Success") : console.log("Login Fail")
    }
    return(
        <>
            <button onClick={func_one}>Button1</button>
            <button onClick={()=>func_two(`admin`,`admin@123`)}>Button2</button>
        </>
    )
}
export default Events;