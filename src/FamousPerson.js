import React, { Component } from 'react';
import './FamousPerson.css';

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
        // Default for form is refresh page - don't want that, so prevent default
        event.preventDefault();
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
                <section>
                    <input onChange={ this.handleChangeFor('name') } placeholder="name" value={this.state.newPerson.name}/><br></br>
                    <input onChange={ this.handleChangeFor('role') } placeholder="role" value={this.state.newPerson.role}/>
                    <p>{this.state.newPerson.name} is famous for {this.state.newPerson.role}.</p>
                    <button onClick={ this.handleClick }>Submit</button>
                </section>
                <section>
                    <h2>All the Famous People</h2>
                    <ul>
                    { this.state.people.map( (person, index) => 
                        <li key={index}>The {person.name} starred in {person.role}.</li>
                        ) }
                    </ul>
                </section>
            </div>
        );
    }
}

export default FamousPerson;
