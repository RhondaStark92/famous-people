import React, { Component } from 'react';
import './FamousPerson.css';

class FamousPerson extends Component {
    // An abbreviated way to setup component state
    state = { 
        person: {
            name: 'Jane Doe',
            role: 'Tarzan'
        },
    }

    handleChangeFor = (propertyName) => {
        return (event) => {
        this.setState( { 
            person: {
            ...this.state.person,
            [propertyName]: event.target.value 
            }
        } );
        }
    }

    handleClick = (event) => {
        console.log ('Person', this.state.person);
    }
    
    render() {
    return (
        <section>
            <input onChange={ this.handleChangeFor('name') } placeholder="name"/><br></br>
            <input onChange={ this.handleChangeFor('role') } placeholder="role"/>
            <p>{this.state.person.name} is famous for {this.state.person.role}.</p>
            <button onClick={this.handleClick}>Submit</button>
        </section>
    );}
}

export default FamousPerson;
