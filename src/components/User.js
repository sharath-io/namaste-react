import { useState } from "react";

const User = (props) =>{
    const [count] = useState(0)
	return (
		<div className="user-card">
		  <h2> user:  {props.name}</h2>
		  <h3>Location: {props.location}</h3>
          <button>Count: {count}</button>
		</div>
	)}
	
export default User;