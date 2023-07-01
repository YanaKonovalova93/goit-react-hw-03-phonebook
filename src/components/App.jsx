import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactsList } from './Contacts/ContactsList';
import { ContactsForm } from './Contacts/ContactsForm';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  saveNewContact = (name, number) => {
    const id = nanoid();
    this.setState(prevState => {
      const newContact = {
        name,
        number,
        id,
      };
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
  };

  deleteContact = id => {
    this.setState(prevState => {
      return { contacts: prevState.contacts.filter(item => item.id !== id) };
    });
  };

  handleSubmit = ({ name, number }) => {
    const isInContacts = this.state.contacts.some(contact => {
      return contact.name.toLowerCase() === name.toLowerCase();
    });
    if (isInContacts) {
      alert(`${name} is already in contacts.`);
      return;
    }
    this.saveNewContact(name, number);
  };

  onFilter = filterInput => {
    this.setState({
      filter: filterInput,
    });
  };

  initialValues = {
    name: '',
    number: '',
  };

  getFilterContacts = () => {
    return this.state.contacts.filter(({ name }) =>
      name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  componentDidMount() {
    const stringifiedContacts = localStorage.getItem('contacts');
    const contacts = JSON.parse(stringifiedContacts) ?? [];

    this.setState({ contacts });
  }

  componentDidUpdate(prevProps, prevState) {

    if (prevState.contacts.length !== this.state.contacts.length) {
      const stringifiedContacts = JSON.stringify(this.state.contacts);
      localStorage.setItem('contacts', stringifiedContacts);
    }
  }

  render() {
    const filteredContacts = this.getFilterContacts();
    return (
      <>
        <h1>Phonebook</h1>
        <ContactsForm handleSubmit={this.handleSubmit} />

        {this.state.contacts.length > 0 && (
          <>
            <h2>Contacts</h2>
            <Filter onFilterChange={this.onFilter} value={this.state.filter} />
            <ContactsList
              deleteContact={this.deleteContact}
              data={filteredContacts}
            />
          </>
        )}
      </>
    );
  }
}
