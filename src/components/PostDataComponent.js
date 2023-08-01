import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function PostDataComponent() {
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    gender: "",
    age: "",
  });

  const navigate = useNavigate();

  const apiUrl = "http://localhost:3001/users";

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(apiUrl, data)
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

    setData((pre) => ({ ...pre, [name]: value })); //destructure
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input type="text" name="first_name" onChange={handleChange} />
      </label>
      <label>
        Last Name:
        <input type="text" name="last_name" onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type="text" name="email" onChange={handleChange} />
      </label>
      <label>
        Gender:
        <input type="text" name="gender" onChange={handleChange} />
      </label>
      <label>
        Age:
        <input type="text" name="age" onChange={handleChange} />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
}

export default PostDataComponent;
