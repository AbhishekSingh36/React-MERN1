import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);

    console.log("Constructor Is Called");

    this.state = {
      nameStateVariable: ""
    };
  }
}