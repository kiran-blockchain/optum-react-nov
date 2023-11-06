import axios from "axios";
import { useEffect, useState } from "react";


const UserList = (props) => {
    const [users,setUsers] = useState([])
    const buildRows = () => {
        return users.map((item, index) => {
            return (<tr>
                <th scope="row">{index}</th>
                <td>{item.name.firstname },{item.name.lastname }</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
            </tr>)
        });
    };

    const getUsers = async ()=>{
        try{
            let result = await axios.get("https://fakestoreapi.com/users");
            console.log(result);
            setUsers(result.data);
        }
        catch(ex){
            console.log(ex);
            setUsers([]);
        }
    };
    useEffect(()=>{
        getUsers();
    },[]);
    
    return (
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                </tr>
            </thead>
            <tbody>
                {buildRows()}
            </tbody>
        </table>
    )
}

export default UserList;