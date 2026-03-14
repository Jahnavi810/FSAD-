import { useEffect, useState } from "react";

function UserList() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>Users API</h2>

      {users.map((user) => (
        <div key={user.id}>
          <p><b>{user.name}</b></p>
          <p>{user.email}</p>
          <p>{user.phone}</p>
          <hr />
        </div>
      ))}

    </div>
  );
}

export default UserList;