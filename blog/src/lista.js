import React, { Component } from "react"; 

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
            <ul>
                {items}
            </ul>
        );
    }
}
    
export default Lista;