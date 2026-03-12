function withComponent(Comp){
    return function enhancedComponent(props){
        return(
            <>
                <h1>Enhanced Component !!!</h1>
                <Comp {...props}></Comp>
            </>
        )
    }
}
export default withComponent;