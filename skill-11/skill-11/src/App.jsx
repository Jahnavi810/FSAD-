import "./App.css";
import {useState} from "react";
import Dashboard from "./components/Dashboard";
import LocalUserList from "./components/LocalUserList";
import UserList from "./components/UserList";
import FakePostList from "./components/FakePostList";

function App(){

const [page,setPage]=useState("home");

return(

<div className="container">

{page==="home" && <Dashboard setPage={setPage}/>}
{page==="local" && <LocalUserList/>}
{page==="api" && <UserList/>}
{page==="fake" && <FakePostList/>}

</div>

)

}

export default App;