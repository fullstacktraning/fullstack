import { useState } from "react";
import Comp1 from "./Comp1";
import Comp2 from "./Comp2";
const State = ()=>{
    const [msg,setMsg] = useState(`Hello`);
    const [num1,setNum1] = useState(200);
    const [num2,setNum2] = useState(100);
    const [flag,setFlag] = useState(true);
    const [nums,setNums] = useState([100,200,300,400,500]);
    const [obj,setObj] = useState({frontend:`React`,backend:`Boot`,database:`MongoDB`});
    const [laptops,setLaptops] = useState([{"pid":111,"pname":"Hp","pcost":10000,"pimg":"https://mern-stack-appln.s3.eu-north-1.amazonaws.com/laptops/hp.png"},
                                            {"pid":222,"pname":"Asus","pcost":20000,"pimg":"https://mern-stack-appln.s3.eu-north-1.amazonaws.com/laptops/asus.png"}]);
    return(
        <>
            <table border={1}
                   align="center"
                   cellPadding={10}
                   cellSpacing={10}>
                <thead>
                    <tr>
                        <th>pid</th>
                        <th>pname</th>
                        <th>pcost</th>
                        <th>pimg</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        laptops.map((element,index)=>{
                            return(<tr key={index}>
                               <td>{element.pid}</td> 
                               <td>{element.pname}</td>
                               <td>{element.pcost}</td>
                               <td>
                                    <img src={element.pimg} width="50"></img>
                               </td>
                            </tr>)
                        })
                    }
                </tbody>
                <tfoot></tfoot>
            </table>
           
           
           
           
            <p>{JSON.stringify(obj)}</p>

            {/* <h1>{obj.frontend}...{obj.backend}...{obj.database}</h1> */}
            
            
            {
                nums.map((element,index)=>{
                    return(<h1 key={index}>{element}</h1>)
                })
            }

            
            {
                flag ? <h1>{num1}</h1> : <h1>{num2}</h1>
            }
            {
                !flag ? <h1>{num1}</h1> : <h1>{num2}</h1>
            }
            {
                flag ? <Comp1></Comp1> : <Comp2></Comp2>
            }
            {
                !flag ? <Comp1></Comp1> : <Comp2></Comp2>
            }
            
            <h1>Addition. {num1 + num2}</h1>
            <h1>SQRT of Num1 : {Math.sqrt(num1)}</h1>
            
            <h1>{msg}</h1>
        </>
    )
}
export default State;