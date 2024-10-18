import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";


class About extends React.Component{

    constructor(props){
        super(props);

        // console.log('Parent constructor')
    }


    componentDidMount(){
        // console.log("Parent ComponentDidMount");
    }
    render(){
        console.log('Parent render')

        return (
            <div>
            <h1>About Page</h1>
            <p>This is About Page</p>
            <UserContext.Consumer>
                {(data)=> <h1>{data.loggedInUser}   </h1>}
            </UserContext.Consumer>
            <UserClass name={"Frst Class"} location={"HYD - C"}/>
        </div>

        )
    }
}

// const About =() =>{
//     return (
//         <div>
//             <h1>About Page</h1>
//             <p>This is About Page</p>
//             <User name={"Sharath Functional"} location={"Hyd - F"}/>
//             <UserClass name={"Sharath Class"} location={"HYD - C"}/>
//         </div>
//     )
// }

export default About;