import React, { Component } from 'react';
import Notiflix from 'notiflix';
import { GlobalStyle, Div } from './GlobalStyles';
import { PhonebookForm } from './PhonebookForm';
import { ContactsLi, FindContact } from './ContactsForm';

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

  addContact = newContact => {
    let isName = this.state.contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (isName) {
      Notiflix.Notify.info(`${newContact.name} is already in contacts`);
      return;
    } else
      this.setState(prevState => {
        return { contacts: [...prevState.contacts, newContact] };
      });
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  handleFilterChange = e => {
    const findName = e.target.value.trim();
    this.setState({ filter: findName.toLocaleLowerCase() });
  };

  changeFilter = e => {
    const findName = e.target.value.trim();
    this.setState({ filter: findName.toLocaleLowerCase() });
  };

  render() {
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(this.state.filter)
    );

    return (
      <Div>
        <GlobalStyle />
        <h1>Phonebook</h1>
        <PhonebookForm addContact={this.addContact}></PhonebookForm>
        {this.state.contacts.length > 0 && (
          <Div>
            <h2>Contacts</h2>
            <FindContact filter={this.changeFilter} />
            <ContactsLi
              contacts={filteredContacts}
              deleteContact={this.deleteContact}
            />
          </Div>
        )}
      </Div>
    );
  }
}
