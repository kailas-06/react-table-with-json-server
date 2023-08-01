import { useState } from "react";
import "./BasicTable.css";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const URL = `http://localhost:3001/users`;

function BasicTable() {
  const [users, setUsers] = useState([]);
  // const id = useParams();

  useEffect(() => {
    axios
      .get(URL)
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);
  const handleDelete = (id) => {
    const wind = window.confirm("If you want to delete");
    console.log(id);
    if (wind) {
      axios
        .delete(`${URL}/${id}`)
        .then(() => {
          console.log("User data deleted.");
          window.location.reload();
        })
        .catch((error) => {
          console.error("Delete Error:", error);
        });
    }
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Sr No.</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
              <td>{user.age}</td>
              <td>
                <Link to={`/data-update/${user.id}`}>Update</Link>

                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>;
          })}
        </tbody>
      </table>

      <button>
        <Link to={"/post-data-component"}>Add User +</Link>
      </button>
    </div>
  );
}

export default BasicTable;
