import { Component } from 'react';
import { ContactForm } from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from 'components/ContactList';
import initialContacts from './contacts.json';

import { nanoid } from 'nanoid';


export class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
  };

 addContact = ({name, number}) => {
  const normalizedFilter = name.toLowerCase();
  const checkByName = this.state.contacts.find(contact => contact.name.toLowerCase() === normalizedFilter);
  if (checkByName) {
    alert(`${name} is already in contacts`);
  } else {
    const contact = {
      id: nanoid(),
      name, number,
    };
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };
}

deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
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



 