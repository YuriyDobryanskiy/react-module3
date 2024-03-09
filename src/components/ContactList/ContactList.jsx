import { Contact } from '../../components';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul style={{ padding: '10px 0' }}>
      {contacts.map(contact => (
        <Contact
          key={contact.id}
          contact={contact}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  );
};
