import axios from "axios";
import React, { Component } from "react";

class CDMountActivity extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "" };
  }

  componentDidMount() {
    this.getEmail();
  }
  getEmail = async () => {
    let res = await axios.get("https://reqres.in/api/users/1");
    let email = res.data.data.email;
    console.log(email);

    this.setState({ email: email });
  };
  render() {
    return <div>{this.state.email}</div>;
  }
}

export default CDMountActivity;
