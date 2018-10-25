import React, { Component } from 'react';
import './FamousPerson.css';

class FamousPersonList extends Component {
    
    render() {

        return (
            <section>
                <h2>All the Famous People</h2>
                <ul>
                { this.props.list.map( (person, index) => 
                    <li key={index}>The {person.name} starred in {person.role}.</li>
                    ) }
                </ul>
            </section>
        );
    }
}

export default FamousPersonList;
