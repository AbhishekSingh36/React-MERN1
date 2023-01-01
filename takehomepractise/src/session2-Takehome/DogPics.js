import axios from "axios";
import React, { Component } from "react";

class DogPics extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <label>
          Select a Breed
          <select
            value={this.state.breed}
            onChange={(e) => this.handleBreedChange(e)}
            style={{ marginBottom: "10px" }}
          >
            <option></option>
            <option></option>
            <option></option>
            <option></option>
            <option></option>
          </select>
        </label>
      </div>
    );
  }
}

export default DogPics;
