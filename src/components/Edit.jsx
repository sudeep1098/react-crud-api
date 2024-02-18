import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Edit() {
  const navigate = useNavigate();
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setAge(localStorage.getItem("age"));
    setEmail(localStorage.getItem("email"));
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const url = `https://65d0a984ab7beba3d5e37d69.mockapi.io/crud/${id}`;
    axios
      .put(url, {
        name: name,
        age: age,
        email: email,
      })
      .then((res) => {
        navigate("/");
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="row">
      <div className=" col-lg-12 my-3">
        <div className="mb-2">
          <Link to="/">
            <button className="btn btn-primary">Read Data</button>
          </Link>
        </div>
        <div className="text-center p-4 bg-primary border-3">
          <h1 className="text-light">Update Data</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              placeholder="Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              type="text"
              name="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="form-control"
              placeholder="Age"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              placeholder="Email"
            />
          </div>
          <div className="d-grid my-2">
            <button className="btn btn-primary" type="submit" value="update">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Edit;
