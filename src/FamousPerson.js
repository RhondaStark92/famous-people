import React, { Component } from 'react';
import './FamousPerson.css';
import FamousPersonForm from './FamousPersonForm';
import FamousPersonList from './FamousPersonList';

class FamousPerson extends Component {
    // An abbreviated way to setup component state
    state = { 
        newPerson: {
            name: '',
            role: ''
        },
        people: [],
    }

    handleChangeFor = (propertyName) => {
        return (event) => {
        this.setState( { 
            newPerson: {
            ...this.state.newPerson,
            [propertyName]: event.target.value 
            }
        } );
        }
    }

    handleClick = (event) => {
        let user = this.state.newPerson;
        console.log('The new person is', user);
        this.setState({
          people: [...this.state.people, this.state.newPerson],
          // Clear input fields - inputs (in render) get 'value' from state
          newPerson: {
            name: '',
            role: '',
          }
        })
    }
    
    render() {
        return (
            <div>
                <FamousPersonForm handleClick={this.handleClick} handleChangeFor={this.handleChangeFor}
                 newPerson={this.state.newPerson} />
                <FamousPersonList list={this.state.people} />
            </div>
        );
    }
}

export default FamousPerson;
