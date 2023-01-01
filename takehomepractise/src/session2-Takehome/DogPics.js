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
            <option value={this.defaultBreed}>Random</option>
            <option value="beagle">Beagle</option>
            <option value="boxer">Boxer</option>
            <option value="dalmatian">Dalmatian</option>
            <option value="husky">Husky</option>
          </select>
        </label>
      </div>
    );
  }
}

export default DogPics;
