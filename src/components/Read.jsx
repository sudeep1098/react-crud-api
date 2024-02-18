import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function Read() {
  const [apiData, setApiData] = useState([]);
  async function getData() {
    const url = "https://65d0a984ab7beba3d5e37d69.mockapi.io/crud";
    await axios
      .get(url)
      .then((response) => setApiData(response.data))
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    getData();
  }, []);

  async function handleDelete(id) {
    const url = `https://65d0a984ab7beba3d5e37d69.mockapi.io/crud/${id}`;
    await axios
      .delete(url)
      .then((response) => {
        getData();
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function setDataToStorage(id, name, age, email) {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("age", age);
    localStorage.setItem("email", email);
  }
  return (
    <div className="row my-5">
      <div className="col-md-12">
        <div className="mb-2">
          <Link to="/create">
            <button className="btn btn-primary">Create New Data</button>
          </Link>
        </div>
        <table className="table tbale-bordered table-striped table-dark table-hover">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Email</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {apiData.map((item, index) => {
              return (
                <tr key={item.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.email}</td>
                  <td>
                    <Link
                      to="/edit"
                      onClick={() =>
                        setDataToStorage(
                          item.id,
                          item.name,
                          item.age,
                          item.email
                        )
                      }
                    >
                      <button className="btn btn-primary">Edit</button>
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        if (
                          window.confirm("Are you sure you want to delete?")
                        ) {
                          handleDelete(item.id);
                        }
                      }}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Read;
