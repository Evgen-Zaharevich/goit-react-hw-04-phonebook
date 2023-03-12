import React, { Component } from 'react';
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

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount = () => {
    const localData = JSON.parse(localStorage.getItem('contacts'));
    if (localData) {
      return this.setState({ contacts: [...localData] });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts !== contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  addNewContact = newContact => {
    const { contacts } = this.state;

    const hasAlready = contacts.some(
      human => human.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (hasAlready) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
  };

  deleteUser = id => {
    const { contacts } = this.state;

    const newContactList = contacts.filter(contact => contact.id !== id);
    this.setState({ contacts: newContactList });
  };

  handleInputFilter = e => {
    this.setState({ filter: e.target.value });
  };

  getFilteredContacts = filterName => {
    const { contacts } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterName.toLowerCase())
    );
  };

  render() {
    const { contacts, filter } = this.state;

    const showFilteredContacts =
      filter.length > 0 ? this.getFilteredContacts(filter) : contacts;

    return (
      <ContainerApp>
        <BGI>
          <Container>
            <ContainerPhonebook>
              <Section title={'Phonebook'}>
                <ContactForm onSave={this.addNewContact} />
              </Section>
            </ContainerPhonebook>
            <ContainerContacts>
              <Section title={'Contacts'}>
                <Filter onInputFilter={this.handleInputFilter} />
                <Contacts
                  contacts={showFilteredContacts}
                  onDeleteUser={this.deleteUser}
                />
              </Section>
            </ContainerContacts>
          </Container>
        </BGI>
      </ContainerApp>
    );
  }
}
