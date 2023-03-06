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