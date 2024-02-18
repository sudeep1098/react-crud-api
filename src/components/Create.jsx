import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
function Create() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    age: "",
    email: "",
  });

  function handleInput(e) {
    setInput((prevInput) => ({
      ...prevInput,
      [e.target.name]: e.target.value,
    }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    const url = "https://65d0a984ab7beba3d5e37d69.mockapi.io/crud";

    axios
      .post(url, {
        name: input.name,
        age: input.age,
        email: input.email,
      })
      .then((response) => {
        navigate("/");
      })
      .catch((error) => {
        // Handle error
        console.error("Error submitting data:", error);
      });
  }
  return (
    <div className="row">
      <div className="col-lg-12 my-3">
        <div className="mb-2">
          <Link to="/">
            <button className="btn btn-primary">Read Data</button>
          </Link>
        </div>
        <div className="text-center p-4 bg-primary border-3">
          <h1 className="text-light">Create Data</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              onChange={handleInput}
              type="text"
              name="name"
              className="form-control"
              placeholder="Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              onChange={handleInput}
              type="text"
              name="age"
              className="form-control"
              placeholder="Age"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              onChange={handleInput}
              type="text"
              name="email"
              className="form-control"
              placeholder="Email"
            />
          </div>
          <div className="d-grid my-2">
            <button className="btn btn-primary" type="submit" value="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Create;
