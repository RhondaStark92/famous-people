import React, { Component } from 'react';
import './FamousPerson.css';

class FamousPersonForm extends Component {
    
    render() {

        return (
            <section>
                <input onChange={ this.props.handleChangeFor('name') } placeholder="name" value={this.props.newPerson.name}/><br></br>
                <input onChange={ this.props.handleChangeFor('role') } placeholder="role" value={this.props.newPerson.role}/>
                <p>{this.props.newPerson.name} is famous for {this.props.newPerson.role}.</p>
                <button onClick={ this.props.handleClick }>Submit</button>
            </section>
        );
    }
}

export default FamousPersonForm;
