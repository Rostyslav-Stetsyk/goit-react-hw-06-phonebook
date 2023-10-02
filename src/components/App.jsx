// import { useEffect, useState } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Section } from './Section/Section';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { useSelector } from 'react-redux';

export const App = () => {
  const contacts = useSelector(state => state.contacts);

  // useEffect(() => {
  //   const contacts = localStorage.getItem('contacts');
  //   if (contacts !== null) setContacts(JSON.parse(contacts));
  // }, []);

  // useEffect(() => {
  //   if (!contacts.length) return;
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const onSubmitForm = contact => {
  //   if (contacts.some(el => el.number === contact.number)) {
  //     alert(
  //       `This number (${
  //         contact.number
  //       }) is already in the contact list, recorded as ${
  //         contacts.find(el => el.number === contact.number).name
  //       }`
  //     );
  //     return;
  //   }
  //   setContacts(prevState => [...prevState, contact]);
  // };

  // const onDelete = id => {
  //   setContacts(prevState => prevState.filter(el => el.id !== id));
  // };

  return (
    <>
      <Section title={'Phonebook'}>
        <ContactForm />
      </Section>
      <Section title={'Contacts'}>
        <Filter />
        {contacts.length ? <ContactList /> : <p>No contacts</p>}
      </Section>
    </>
  );
};
