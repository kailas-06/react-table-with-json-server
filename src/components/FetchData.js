import axios from "axios";
import React, { useEffect, useState } from "react";
import "./TableStyle.css";

function FetchData() {
  const URL = "https://jsonplaceholder.typicode.com/users";
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(URL)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>Data Table</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.username}</td>
              {/* <td>{item?.address}</td> */}
              <td>
                <ul>
                  <li>Street :{item?.address?.street}</li>
                  <li>Suite : {item?.address?.suite}</li>
                  <li>City : {item?.address?.city}</li>
                  <li>Zipcode : {item?.address?.zipcode}</li>
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FetchData;
