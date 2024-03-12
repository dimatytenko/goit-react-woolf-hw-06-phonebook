import { useDispatch, useSelector } from 'react-redux';

import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { ContactForm } from './ContactForm';
import { addContact, deleteContact } from '../redux/contacts/contactsSlice';
import { changeFilter } from '../redux/contacts/filterSlice';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter);

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const onChangeFilter = e => {
    dispatch(changeFilter(e.target.value));
  };

  const filterContacts = (filter, contacts) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const addNewContact = newContact => {
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      alert(`${newContact.name} is already in contacts`);
      return false;
    }
    dispatch(addContact(newContact));
    return true;
  };

  return (
    <div className="App">
      <h1>Phonebook</h1>

      <ContactForm onSubmit={addNewContact} />

      <h2>Contacts</h2>
      <Filter
        value={useSelector(state => state.contacts.filter)}
        onChange={onChangeFilter}
      />
      <ContactList
        list={filterContacts(filter, contacts)}
        onDeleteContact={onDeleteContact}
      />
    </div>
  );
};
