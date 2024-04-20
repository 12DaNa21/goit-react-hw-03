import { useState, useEffect } from 'react';
import css from './App.module.css';
import initialContacts from '../initialContacts.json';
import ContactForm from './ContactForm';
import SearchBox from './SearchBox';
import ContactList from './ContactList';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const storedContacts = localStorage.getItem("contacts");
    return storedContacts ? JSON.parse(storedContacts) : initialContacts;
  });
  const [filter, setFilter] = useState('');

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <p className={css.heading}>Phonebook</p>
      <ContactForm onAdd={addContact}/>
      <SearchBox value={filter} onChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact}/>
    </>
  );
}