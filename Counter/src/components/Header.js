import React from "react";

class Header extends React.Component {
    render(){
        return <div>{this.props.headerText}</div>
    }
}

export default Header