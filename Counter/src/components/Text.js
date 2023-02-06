import React from "react";

class Text extends React.Component {
    render () {
        console.log(this.props)
        return <div>{this.props.displayText}</div>
    }
}
export default Text;