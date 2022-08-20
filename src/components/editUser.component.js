import React, {useState,useEffect} from "react";
import axios from "axios";



export default function EditUser(){
    const [data,setData] = useState([]);


    useEffect(() =>{    // componentDidMount(), componentDidUpdate(), componentWillUnMount()
        
        
        axios.get("http://localhost:5500/users")
        .then(res =>{
           setData(res.data);
            // console.log(res.data);
        })
        .catch(err =>{ console.log(err);
        })

    }, [])
    return(
        <div>
             <h4> Show User data</h4>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>City</th>
                        <th>Age</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        // console.log(data)
                        data.length > 0?
                        (
                            data.map(value => 
                                <tr key={value._id}>
                                    <td>{value.Name}</td>
                                    <td>{value.City}</td>
                                    <td>{value.Age}</td>
                                    <td><button className="btn btn-primary"
                                    onClick={() =>{
                                        // this.setData(value)
                                        this.userSetData(value)
                                    }}>
                                        Edit</button></td>
                                    <td><button className="btn btn-primary"
                                    onClick={() =>{
                                        this.deleteUser(value)
                                    }}>
                                            Delete</button></td>
                                </tr>
                            )
                        )
                        :
                        (
                            <tr>
                                <td>No Data..!</td>
                            </tr>
                        )
                    }
                </tbody>


            </table>
        </div>
    )
}


