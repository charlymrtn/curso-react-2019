import React, { Component } from "react";
import "./IpAddress.css";
 
class Address extends Component {

    render() {
        return (
            <div>
                <p> {this.props.ip}</p>
            </div>
        );
    }
}
    
export default Address;