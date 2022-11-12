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
    
        this.setState({ [name]: value, });
     };

handleSubmit = event => {
        event.preventDefault();
        console.log('state', this.state);
        console.log('name', this.state.name);
        console.log('#', this.state.number);
        this.props.onSubmit(this.state.name);
        this.props.onSubmit(this.state.number);

        this.setState({ name: '', number: '' });
        //this.reset();
      };

      //reset = () => {
       // this.setState({ name: '', number: '' });
      //};

    render() {
        return (
           
             <form className='form'
             onSubmit={this.handleSubmit}>
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
                   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                   title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                   required
             />
            </label>
            <button type="submit" className='FormBtn'>Add contact</button>
       </form>
           );
         }
    }

   //handleNameChange = event => {
        
       //this.setState({ name: event.currentTarget.value });
      //};
    
      //handleNumberChange = event => {
      //  console.log(event.currentTarget.value);
    
      //  this.setState({number: event.currentTarget.value});
     // }; 