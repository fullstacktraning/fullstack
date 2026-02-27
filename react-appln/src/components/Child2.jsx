const Child2 = ({arr,flag})=>{
    return(
        <>
            {
                flag ? <h1>Hello</h1> : <h1>Welcome</h1>
            }
            
            
            {
                arr.map((element,index)=>{
                    return(<p key={index}>{element}</p>)
                })
            }
        </>
    )
}
export default Child2;