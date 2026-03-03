import { useParams } from "react-router-dom";

const Dell = ()=>{
    const {processor,harddisk,generation} = useParams();
    return(
        <>
            <h1>Dell Info Soon...!{processor}...{harddisk}...{generation}</h1>
        </>
    )
}
export default Dell;