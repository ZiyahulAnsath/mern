import React, { useState ,useEffect} from "react";
import { useParams } from 'react-router-dom';
const EditeUser = () => {
 
   
    let {paramsparams} = useParams();
  
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [age, setage] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5500/users/singleuser/${paramsparams}`, {})
      .then((response) => {
        return response.json();
      })
      .then((singledata) => {
        const singleuser = singledata;
        console.log(singledata)
        setData(singleuser);

      });
  }, []);




console.log(data);

  return (
    <div>
      <div className="container-lg">
        <div className="form-group">
          <label>Name:</label>
          <input
            type={"text"}
            placeholder="Enter the user name"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>City :</label>
          <input
            type={"text"}
            className="form-control"
            placeholder="Enter the City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Age:</label>
          <input
            type={"number"}
            className="form-control"
            placeholder="Enter the Age"
            value={age}
            onChange={(e) => setage(e.target.value)}
          />
        </div>
        <div className="mt-2">
          <div className="row">
            <div className="col-3 pr-1">
              <button
                className="btn btn-primary"
               
              >
               Uodate User 
              </button>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditeUser;
