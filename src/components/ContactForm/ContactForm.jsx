import React, { Component } from 'react';
import { nanoid } from 'nanoid';

export class ContactForm extends Component {
    state = {
        number: '',
        name: '',
      };

    nameInputId = nanoid();
    numberInputId = nanoid();

      handleChange = event => {
        const { name, value } = event.currentTarget;
    
        this.setState({ [name]: value });
     };
 
      handleNameChange = event => {
        
    
       this.setState({ name: event.currentTarget.value });
      };
    
      handleNumberChange = event => {
        console.log(event.currentTarget.value);
    
        this.setState({number: event.currentTarget.value});
      };
    
      handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);
        this.props.onSubmit(this.state)

        this.reset();
      };

      reset = () => {
        this.setState({ name: '', number: '' });
      };

    render() {
        return (
           
             <form onSubmit={this.handleSubmit}>
               <label htmlFor={this.nameInputId}>
                 Name
                 <input
                   type="text"
                   name='name'
                   value={this.state.name}
                   onChange={this.handleChange}
                   id={this.nameInputId}        
                   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                   title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                   required
                 />

             
            </label> 
            <label htmlFor={this.numberInputId}>
            Number 
                 <input
                   type="tel"
                   name='number'
                   value={this.state.number}
                   onChange={this.handleChange}
                   id={this.numberInputId}
             />
            </label>
            <button type="submit">Add contact</button>
       </form>
           );
         }
    }

    