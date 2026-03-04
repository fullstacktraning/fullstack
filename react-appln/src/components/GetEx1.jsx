import axios from "axios"
import { useEffect, useState } from "react";
const GetEx1 = ()=>{
    const [users,setUsers] = useState([]);
    const get_users = async ()=>{
        const {data} = await axios.get(`https://jsonplaceholder.typicode.com/users`);
        console.log(data);
        setUsers(data);
    }
    useEffect(()=>{
        get_users();
    },[]);
    return(
        <>
            <table border={1}
                   align="center"
                   cellPadding={10}
                   cellSpacing={10}>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>phone</th>
                        <th>username</th>
                        <th>website</th>
                        <th>address</th>
                        <th>company</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((element,index)=>{
                            return(<tr key={index}>
                                <td>{element.id}</td>
                                <td>{element.name}</td>
                                <td>{element.phone}</td>
                                <td>{element.username}</td>
                                <td>{element.website}</td>
                                <td>{JSON.stringify(element.address)}</td>
                                <td>{JSON.stringify(element.company)}</td>
                            </tr>)
                        })
                    }
                </tbody>
                <tfoot></tfoot>
            </table>
        </>
    )
}
export default GetEx1;