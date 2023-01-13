import axios from "axios";
import React, { Component } from "react";

class UserData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {
        id: "",
        email: "",
        firstName: "",
        lastName: "",
        imageLink:
          "https://pdtxar.com/wp-content/uploads/2019/04/person-placeholder.jpg"
      }
    };
  }
  showData = async (id) => {
    let res = await axios
      .get(`https://reqres.in/api/users/${id}`)
      .catch(function (error) {
        if (error.response) {
          alert("Failed to fetch data");
        } else {
          console.log("Error", error.message);
        }
      });
      if (res) {
        let userData = res.data.data;
        this.setState({
          userData: {
            id: id,
            email: userData.email,
            firstName: userData.first_name,
            lastName: userData.last_name,
            imageLink: userData.avatar
          }
        });
      }
    };
    render() {
        return (
          <div>
            <button
              style={{ margin: "0px 10px 0px 0px", padding: "10px" }}
              onClick={() => this.showData(1)}
            >
              1
            </button>
            <button
          style={{ margin: "0px 10px 0px 0px", padding: "10px" }}
          onClick={() => this.showData(2)}
        >
          2
        </button>