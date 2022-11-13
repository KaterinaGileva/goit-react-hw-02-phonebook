import { Component } from 'react';
import Filter from './components/Filter/Filter';
import { ContactForm } from './components/ContactForm/ContactForm';
//import { Formik, Field, Form } from "formik";
//import "./styles.css";
//import * as yup from 'yup';

import initialContacts from './contacts.json';
import { nanoid } from 'nanoid';

import ContactList from 'components/ContactList';

export class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
  };

  addContact = (name)=> {
      console.log('name', name);
      
      const contact = {
          id: nanoid(),
         name    
      };
      
      this.setState(({ contacts }) => ({
        contacts: [contact, ...contacts],
     }));
    };
 
  
 
deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
   }));
 };

formSubmitHandler = data => {
  console.log(data);
};

changeFilter = event => {
    this.setState({filter: event.currentTarget.value});
};

getVisibleContacts = () => {
     const { filter, contacts } = this.state;
     const normalizedFilter = filter.toLowerCase();

  

     return contacts.filter(contact =>
     contact.name.toLowerCase().includes(normalizedFilter),
    );
};

  render() {
   
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();



    return (
     <div className='container'>
        <h1>Phonebook</h1> 
        <ContactForm onSubmit={this.addContact}
        />
        
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter}/>
        <ContactList
           contacts={visibleContacts}
           onDeleteContact={this.deleteContact} 
         />
         
      </div>
    )
  
}
}

//const schema = yup.object().shape({
//  login: yup.string().required(),
 //password: yup.string().min(6).max(16).required(),
 // email: yup.string().email(),
 // website: yup.string().url(),
 
//});
//

//addContact = (name)=> {
  //  console.log('name', name);
    
   // const contact = {
   //     id: nanoid(),
  //      name    
  //  };
    
   // this.setState(({ contacts }) => ({
   //   contacts: [contact, ...contacts],
   // }));
 // };

//<Formik 
//initialValues={initialValues} 
//validationSchema={schema}
//onSubmit={handleSubmit} />

//this.setState(prevState => ({
   //  contacts: prevState.contacts.map(contact => {
    //  if (contact.id === contactId) {
    //     return {
     //     ...contact,
    //     completed: !contact.completed,
    //    };
    //   }

   //   return contact;
   // }),
 //  }));

 