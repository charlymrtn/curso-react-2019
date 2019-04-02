import React, { Component } from "react";
import "./IpAddress.css";
import Address from "./Address";

var xhr;
 
class IpAddress extends Component {

    constructor(props){
        super(props);

        this.state = {
            ip_address: '...'
        }

        this.processRequest = this.processRequest.bind(this);
    }

    componentDidMount(){
        xhr = new XMLHttpRequest();
        xhr.open("GET","https://ipinfo.io/json?token=17c406aaf21315");
        xhr.send();
        xhr.addEventListener('readystatechange',this.processRequest,false);
    }

    processRequest(){
        if(xhr.readyState === 4 && xhr.status === 200) {
            console.log(xhr.responseText);
            var response = JSON.parse(xhr.responseText);
            this.setState({
                ip_address: response.ip
            });
        }
    }

    render() {
        return (
            <h1>
                <Address ip={this.state.ip_address}/>
            </h1>
        );
    }
}
    
export default IpAddress;