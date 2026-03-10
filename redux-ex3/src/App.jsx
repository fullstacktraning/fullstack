import {useDispatch,useSelector} from "react-redux";
import api from "./api/api";
import { useRef } from "react";
const App = ()=>{
  
  const dispatch = useDispatch();

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  

  const post = ()=>{
    dispatch(api({"name":ref1.current.value,"job":ref2.current.value}));
  }

  const res = useSelector(state=>state)
  
  return(
    <>
      <input type="text" ref={ref1} placeholder="enter name"></input>
      <br></br><br></br>
      <input type="text" ref={ref2} placeholder="enter job"></input>
      <br></br><br></br>
      <button onClick={post}>Post</button>
      <br></br><br></br>
      <p>{JSON.stringify(res)}</p>
    </>
  )
}
export default App;