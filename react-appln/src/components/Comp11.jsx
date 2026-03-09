import Global1 from "../global/Global1";
import Comp22 from "./Comp22.jsx"
const Comp11 = ()=>{
    return(
        <>
            <Global1.Provider value={"Hello"}>
                <Comp22></Comp22>
            </Global1.Provider>
        </>
    )
}
export default Comp11;