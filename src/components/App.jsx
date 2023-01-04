// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };


import React, {Component} from 'react';
import {nanoid} from 'nanoid';

import ContactForm from './ContactForm/ContactForm';
import Notification from './Notification/Notification';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

import { Container, Phonebook, Contacts, Section } from './Components.styled';

class App extends Component{
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  };

  handleFilterChange = e => {
    const {name, value} = e.currentTarget;
    this.setState({[name]: value});
  };

  filteredContacts = () => {
    const filterNormalize = this.state.filter.toLowerCase();

    return this.state.contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filterNormalize);
    }).sort((a,b) => a.name.localeCompare(b.name))
  }

  formSubmit = ({name, number}) => {
    this.setState(prevState=> {
      const {contacts} = prevState;
      if(
        contacts.find(
          contact => contact.name.toLowerCase() === name.toLowerCase()
        )
      ) {
        alert(`${name} is already in contact`);
        return contacts;
      }
      return {
        contacts:[{id: nanoid(), name, number}, ...contacts],
      }
    })
  };

  contactDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !==id)
    }))
  };

  render(){
    const {filter, contacts} = this.state;
    const filteredContacts = this.filteredContacts(filter);
    return(
      <Container>
        <Phonebook>Phonebook</Phonebook>
        <ContactForm onSubmit={this.formSubmit}/>
        <Contacts>Contacts</Contacts>
        {contacts.length === 0?(
          <Notification message = "Your contact book is empty, add your first contact"/>)
        :(
          <Section>
            <Filter title = "Find contact by name" onChange = {this.handleFilterChange} value = {filter}/>
            <ContactList filteredContacts = {filteredContacts} onDeleteContact = {this.contactDelete}/>
          </Section>
        )}
      </Container>
    )
  }
};

export default App;