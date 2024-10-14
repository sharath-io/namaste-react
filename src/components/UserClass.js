import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props.name+ " Children constructor")

    this.state = {
      userInfo: {
        name: "",
        location: "",
        twitteId: "",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/sharath-io");
    const dataJSON = await data.json();
    // console.log(this.props.name+ " child ComponentDidMount");
    this.setState({
      userInfo: dataJSON,
    });
  }

  componentWillUnmount(){
    console.log('Byee bytee')
  }

  render() {

    const {name,location,avatar_url, twitter_username,blog,bio,followers,following} = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} alt="avatar" />
        <div className="user-details">
          <h2> user: {name}</h2>
          <h3>Location: {location}</h3>
          <p>Bio: {bio}</p>
          <p>Blog: {blog}</p>
          <p>Connect me @{twitter_username}</p>
          <p>Followers: {followers}</p>
          <p>Following: {following}</p>

        </div>
      </div>
    );
  }
}

export default UserClass;
