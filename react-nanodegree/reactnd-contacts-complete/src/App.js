import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ListContacts from './ListContacts';
import CreateContact from './CreateContact';
import * as ContactsAPI from './utils/ContactsAPI';

class App extends Component {
  state = {
    contacts: []
  }

  componentDidMount() {
    ContactsAPI.getAll().then(contacts => {
      this.setState({ contacts }); // { contacts } is short for { contacts: contacts }
    })
  }

  createContact = (contact) => {
    ContactsAPI.create(contact).then(contact => {
      this.setState(state => ({
        contacts: state.contacts.concat([ contact ])
      }))
    })
  }

  removeContact = (contact) => {
    this.setState((state) => ({ contacts: state.contacts.filter(c => c.id !== contact.id) }))
    ContactsAPI.remove(contact);
  }

  // If we don't need to pass props we can use the component prop rather than the render prop,
  // e.g. <Route path="/create" component={CreateContact} />
  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <ListContacts
            contacts={this.state.contacts}
            onDeleteContact={this.removeContact}
          />
        )}/>
        <Route path="/create" render={({ history }) => (
          <CreateContact
            onCreateContact={(contact) => {
              this.createContact(contact)
              history.push('/')
            }}
          />
        )}/>
      </div>
    )
  }
}

export default App;
