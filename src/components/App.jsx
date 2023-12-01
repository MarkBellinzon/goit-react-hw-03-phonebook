import { Component } from 'react';
import { nanoid } from 'nanoid';

import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

import css from './App.module.css';

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

  addContact = data => {
    const { contacts } = this.state;
    const newContact = {
      id: nanoid(),
      ...data,
    };

    contacts.some(({ name }) => name === data.name)
      ? alert(`${data.name} is already in contacts`)
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, newContact],
        }));
  };

  deleteContact = userId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== userId),
    }));
  };

  handleChangeFilter = ({ currentTarget: { value } }) => {
    this.setState({ filter: value });
  };

  filterContacts = () => {
    const { filter, contacts } = this.state;
    const oneCase = filter.toLowerCase();
    return contacts.filter(({ name }) => name.toLowerCase().includes(oneCase));
  };

   componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem(prevProps, JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { filter } = this.state;

    return (
      <div className={css.form}>
        <h1 className={css.title}>Phonebook</h1>
        <Section>
          <ContactForm addContact={this.addContact} />
        </Section>

        <h1 className={css.title}>Contacts</h1>

        <Section>
          <Filter value={filter} handleChangeFilter={this.handleChangeFilter} />
          <div className={css.scrollbar}>
            <ContactList
              contacts={this.filterContacts()}
              deleteContact={this.deleteContact}
            />
          </div>
        </Section>
      </div>
    );
  }
}
