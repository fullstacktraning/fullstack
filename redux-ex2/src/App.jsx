import {useDispatch,useSelector} from "react-redux"
import api from "./api/api"
import { useEffect } from "react";
const App = ()=>{
  
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(api());
  },[]);

  const res = useSelector(state=>state);
  
  return(
    <>
      <p>{JSON.stringify(res)}</p>
    </>
  )
}
export default App;