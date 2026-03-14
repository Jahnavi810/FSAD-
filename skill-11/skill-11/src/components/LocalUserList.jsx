import { useEffect, useState } from "react";

function LocalUserList(){

const [users,setUsers] = useState([]);

useEffect(()=>{
fetch("/users.json")
.then(res=>res.json())
.then(data=>setUsers(data))
},[])

return(

<div className="card">

<h2>Local Users</h2>

{users.map((user)=>(
<div key={user.id}>

<p><b>{user.name}</b></p>
<p>{user.email}</p>
<p>{user.phone}</p>
<hr/>

</div>
))}

</div>

)

}

export default LocalUserList;