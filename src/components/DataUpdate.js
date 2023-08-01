import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function DataUpdate() {
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    gender: "",
    age: "",
  });

  const navigate = useNavigate();
  const { id } = useParams();
  const apiUrl = `http://localhost:3001/users/${id}`;

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(apiUrl, data) // Use PUT request to update the data
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        navigate("/");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="first_name"
            value={data.first_name}
            onChange={handleChange}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="last_name"
            value={data.last_name}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={data.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Gender:
          <input
            type="text"
            name="gender"
            value={data.gender}
            onChange={handleChange}
          />
        </label>
        <label>
          Age:
          <input
            type="text"
            name="age"
            value={data.age}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default DataUpdate;
