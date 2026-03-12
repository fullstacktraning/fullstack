import TestComp1 from "./TestComp1"
import withComponent from "./withComponent.jsx"

const EnhancedComp = withComponent(TestComp1);

const FinalComp = ()=>{
    return(
        <>
            <EnhancedComp name={"Samba"}></EnhancedComp>
        </>
    )
}
export default FinalComp;