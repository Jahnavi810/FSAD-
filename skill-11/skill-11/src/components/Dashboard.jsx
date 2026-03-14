import React from "react";

function Dashboard({ setPage }) {
  return (
    <div>
      <h1>Dashboard</h1>

      <button onClick={() => setPage("local")}>
        Local Users
      </button>

      <br /><br />

      <button onClick={() => setPage("api")}>
        Users API
      </button>

      <br /><br />

      <button onClick={() => setPage("fake")}>
        Fake API Posts
      </button>
    </div>
  );
}

export default Dashboard;