import React, { Component } from "react"; 
import "./Lista.css";

class Lista extends Component {

    constructor(props){
        super(props);
        this.createMsg = this.createMsg.bind(this);
    }

    createMsg(msg){
        return <li key={msg.date}>{msg.text}</li>
    }

    render() {

        var items = this.props.items.map(this.createMsg);

        return (
            <ul className="theList">
                {items}
            </ul>
        );
    }
}
    
export default Lista;