import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);

    console.log("Constructor Is Called");

    this.state = {
      nameStateVariable: ""
    };
  }

  componentDidMount() {
    console.log("componentDidMount Is Called");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate Is Called");

    console.log("Previous State Variable: ", prevState.nameStateVariable);
    console.log("Current State Variable: ", this.state.nameStateVariable);
  }

  updateTextField = (event) => {
    this.setState({ nameStateVariable: event.target.value });
  };

  render() {
    console.log("Render Is Called");

    // console.log("props from Render", this.props.testValue);

    return (
      <form>
        <label>TextField:</label>
        <input
          type="text"
          name="TextField"
          value={this.state.nameStateVariable}
          onChange={(event) => this.updateTextField(event)}
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;
