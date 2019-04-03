import React, { Component } from "react";
import "./Blog.css";
import Lista from "./lista";

class Blog extends Component {

    constructor(props){
        super(props);

        this.addItem = this.addItem.bind(this);

        this.state = {
            frases: []
        }
    }

    addItem(e){
        var items = this.state.frases;

        if (this._inputElement.value !== ''){
            items.unshift({
                text: this._inputElement.value,
                date: Date.now()
            });
        }

        this.setState({
            frases: items
        });
        
        this._inputElement.value = '';
        console.log(this.state.frases);

        e.preventDefault();
    }

    render() {
    return (
        <div>
            <h1>Blog</h1>
            <form className="todoListMain" onSubmit={this.addItem}>
                <input ref={(a)=>{this._inputElement = a}} placeholder="ingresa una frase"/>
                <button type="submit">Agregar</button>
            </form>
            <Lista items={this.state.frases}/>
        </div>
    );
    }
}
    
export default Blog;