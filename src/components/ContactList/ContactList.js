import React from 'react';
//import classNames from 'classnames';
import './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className="ContactList">
    {contacts.map(({ id, name, number }) => (
      <li
        key={id}
      >
       <p className="ContactList__text">{name}:{number}</p>
        <button
          type="button"
          className="ContactList__btn"
          onClick={() => onDeleteContact(id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

export default ContactList;
