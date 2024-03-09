import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Container, ContactForm, ContactList, SearchBox } from 'components';

import profile from './data/profile.json';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts ? JSON.parse(savedContacts) : profile;
  });
  const [search, setSearch] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(search.toLowerCase()),
  );
  const addContact = (name, number) => {
    setContacts(prevContacts => [
      ...prevContacts,
      { id: nanoid(), name, number },
    ]);
  };
  const deleteContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id),
    );
  };

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox search={search} setSearch={setSearch} />
      <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
    </Container>
  );
};
