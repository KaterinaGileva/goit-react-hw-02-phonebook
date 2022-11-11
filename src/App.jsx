import { Component } from 'react';
import Filter from './components/Filter/Filter';
import { ContactForm } from './components/ContactForm/ContactForm';
//import { Formik, Field, Form } from "formik";
//import "./styles.css";
//import * as yup from 'yup';

import initialContacts from './contacts.json';
import { nanoid } from 'nanoid';
import ContactList from 'components/ContactList';

//import { contactEditor } from 'components/contactEditor/contactEdior';

//const schema = yup.object().shape({
//  login: yup.string().required(),
 //password: yup.string().min(6).max(16).required(),
 // email: yup.string().email(),
 // website: yup.string().url(),
 
//});


export class App extends Component {
  state = {
    contacts: initialContacts,
    filter: ''
  };


  addContact = ({name, number}) => {
    const contact = {
      id: nanoid(),
      name,
      number
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

toggleCompleted = contactId => {
   this.setState(prevState => ({
     contacts: prevState.contacts.map(contact => {
      if (contact.id === contactId) {
         return {
          ...contact,
         completed: !contact.completed,
        };
       }

      return contact;
    }),
   }));
this.setState(({ contacts }) => ({
  contacts: contacts.map(contact =>
   contact.id === contactId ? { ...contact, completed: !contact.completed } : contact,
 ),
}));
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

calculateCompletedContacts = () => {
  const { contacts } = this.state;

  return contacts.reduce(
    (total, contact) => (contact.completed ? total + 1 : total),
    0,
  );
};
  render() {
    const { filter } = this.state;
    
    const visibleContacts = this.getVisibleContacts();

    return (
     <div>
        <h1>Phonebook</h1> 
        <ContactForm onSubmit={this.formSubmitHandler}/>
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter}/>
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact} 
          onToggleCompleted={this.toggleCompleted}
        />
        
        </div>
    )
  
}
}


//<Formik 
//initialValues={initialValues} 
//validationSchema={schema}
//onSubmit={handleSubmit} />