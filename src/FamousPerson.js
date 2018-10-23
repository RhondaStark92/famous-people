import React, { Component } from 'react';
import './FamousPerson.css';

class FamousPerson extends Component {
    // An abbreviated way to setup component state
    state = { 
        person: {
            name: '',
            role: ''
        }
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

    render() {
    return (
        <section>
            <input onChange={ this.handleChangeFor('name') } placeholder="name"/>
            <input onChange={ this.handleChangeFor('role') } placeholder="role"/>
            <p>Hello {this.state.person.name} is famous for {this.state.person.role}.</p>
        </section>
    );}
}

export default FamousPerson;
