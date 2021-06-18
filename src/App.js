import React, { Component } from "react";
import PropTypes from "prop-types";
import shortid from 'shortid';

import Container from "./components/Container/Container";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import FilterContacts from "./components/FilterContacts/FilterContacts"

import styles from "./App.module.css"


class App extends Component {
  static defaultProps = {
    contacts: [ ],
    filter: ''
  };

  static propTypes = {
    contacts: PropTypes.array,
    filter: PropTypes.string,
  };

  state = {
    contacts: this.props.contacts,
    filter: this.props.filter,
  };

  formAddContact = ({ name, number }) => {
    const { contacts } = this.state;
    const contact = {
      id: shortid.generate(),
      name: name,
      number: number,
    };

    contacts.some(({ name }) => name.toLowerCase() === contact.name.toLowerCase()) 
      ? alert(`${name} is already in contacts`)
      : contacts.some(({ number }) => number === contact.number)
        ? alert(`${number} is already in contacts under a different name`)
        : this.setState(({ contacts }) => ({
      contacts:[contact, ...contacts]
    }))
  
  }

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({filter:e.currentTarget.value})
  }
  
  getfilteredContacts = () => {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLowerCase()
    
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter))
  }
  
  componentDidMount=()=>{      
     const contacts = localStorage.getItem('contacts');
     const parsedContacts = JSON.parse(contacts);

     if (parsedContacts) {
       this.setState({ contacts: parsedContacts });
     }
   }

  componentDidUpdate=(prevProps,prevState)=>{
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts',JSON.stringify(this.state.contacts))
    }
  }

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getfilteredContacts();

        return (
          <Container>
            <h1 className={styles.title}>Phonebook</h1>
            <ContactForm onSubmit={this.formAddContact} />

            <h2 className={styles.title}>Contacts</h2>
            <FilterContacts
              value={filter}
              onChange={this.changeFilter}
            />
            <ContactList
              contacts={filteredContacts}
              onDeleteContact={this.deleteContact}
            />
          </Container>
        )
    }
}

export default App;
