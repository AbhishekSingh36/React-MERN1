import axios from "axios";
import React, { Component } from "react";

class DogPics extends Component {
  constructor(props) {
    super(props);
    this.defaultBreed = "random";
    this.state = { breed: this.defaultBreed, imgLink: "" };
  }

  componentDidMount() {
    this.renderDogImage(this.state.breed);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.breed !== this.state.breed) {
      this.renderDogImage(this.state.breed);
    }
  }

  renderDogImage = async (breed) => {
    let url = "";
    if (breed === this.defaultBreed) {
      url = "https://dog.ceo/api/breeds/image/random";
    } else {
      url = `https://dog.ceo/api/breed/${breed}/images/random`;
    }
    const res = await axios.get(url);
    const imgLink = res.data.message;

    this.setState({
      imgLink: imgLink
    });
  };

  handleBreedChange = (e) => {
    const newBreed = e.target.value;
    this.setState({
      breed: newBreed
    });
  };

  render() {
    return (
      <div>
        <label>
          <h2>Select Your Doggie:</h2>
          <select
            value={this.state.breed}
            onChange={(e) => this.handleBreedChange(e)}
            style={{ marginBottom: "11px" }}
          >
            <option value={this.defaultBreed}>Random</option>
            <option value="beagle">Beagle Doggie</option>
            <option value="boxer">Boxer Doggie</option>
            <option value="dalmatian">Dalmatian Doggie</option>
            <option value="husky">Husky Doggie</option>
          </select>
        </label>
        <div>
          <div>
            <img src={this.state.imgLink} alt="NaN" height="404" />
          </div>
          <div>
            <button
              onClick={() => this.renderDogImage(this.state.breed)}
              style={{ padding: "8px" }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default DogPics;
