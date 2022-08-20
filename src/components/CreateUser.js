import React, { useState } from "react";

const CreateUser = () => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [age, setage] = useState("");
  const FetchUsers = () => {
    fetch("http://localhost:5500/users", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        city,
        age,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

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
                onClick={() => {
                  FetchUsers();
                }}
              >
                Create User
              </button>
            </div>
            {/* <div className="col px-4">
                                    <input type={"submit"} className="btn btn-danger" />
                                </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
