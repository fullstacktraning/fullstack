import { useDispatch,useSelector } from "react-redux";
import api from "./api/api";
import { useEffect } from "react";
const App = ()=>{
  const dispatch = useDispatch();
 
  useEffect(()=>{
    dispatch(api())
  },[]);

  const newstate = useSelector(state=>state);
  
  return(
    <>
      <p>{JSON.stringify(newstate)}</p>
    </>
  )
}
export default App;