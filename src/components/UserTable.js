import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom"

const UserTable = () => {
    
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5500/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        const getAllUsers = data;
        setData(getAllUsers);
      });
  }, []);

  return (
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
          {data.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.city}</td>
              <td>{user.age}</td>
              <td>
                <button className="btn btn-primary"                 >
          
       
                <Link to={`useredit/${user._id}`}>Edit</Link>                                                      
                  
                </button>
              </td>
              <td>
                <button className="btn btn-primary" onClick={() => {}}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
