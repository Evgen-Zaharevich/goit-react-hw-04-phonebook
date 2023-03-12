// import React, { Component } from 'react';
import { ContactForm } from 'components/Form/Form';
import { Section } from 'components/Section/Section';
import { Contacts } from 'components/Contacts/Contacts';
import { Filter } from 'components/Filter/Filter';

import {
  Container,
  ContainerPhonebook,
  ContainerContacts,
  BGI,
  ContainerApp,
} from 'components/App/App.styled';
import { useEffect, useState } from 'react';

export const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem('contacts'));
    if (localData) {
      return setContacts([...localData]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addNewContact = newContact => {
    const hasAlready = contacts.some(
      human => human.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (hasAlready) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    setContacts(prevState => {
      return [...prevState, newContact];
    });
  };

  const deleteUser = id => {
    const newContactList = contacts.filter(contact => contact.id !== id);
    return setContacts(newContactList);
  };

  const handleInputFilter = e => {
    setFilter(e.target.value);
  };

  const getFilteredContacts = filterName => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterName.toLowerCase())
    );
  };

  const showFilteredContacts = () => {
    return filter.length > 0 ? getFilteredContacts(filter) : contacts;
  };

  return (
    <ContainerApp>
      <BGI>
        <Container>
          <ContainerPhonebook>
            <Section title={'Phonebook'}>
              <ContactForm onSave={addNewContact} />
            </Section>
          </ContainerPhonebook>
          <ContainerContacts>
            <Section title={'Contacts'}>
              <Filter onInputFilter={handleInputFilter} />
              <Contacts
                contacts={showFilteredContacts()}
                onDeleteUser={deleteUser}
              />
            </Section>
          </ContainerContacts>
        </Container>
      </BGI>
    </ContainerApp>
  );
};
