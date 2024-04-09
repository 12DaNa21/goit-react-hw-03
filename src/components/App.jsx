import { useState } from 'react';
import css from './App.module.css';
import { Formik, Form, Field } from 'formik';
import initialContacts from '../initialContacts.json';
import ContactForm from './ContactForm';
import Contact from './Contact';
import SearchBox from './SearchBox';
import ContactList from './ContactList';

export default function App() {
 
const [contacts, setContacts] = useState(initialContacts);

 
return (
    <div className={css.container}>
      <p className={css.header}>Phonebook</p>
      <ContactForm/>
      
      <SearchBox/>
      <ContactList contacts={initialContacts} />
    </div>
  )
}


