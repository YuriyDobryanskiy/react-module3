import styles from './Contact.module.css';

import { IoMdPerson } from 'react-icons/io';
import { FaPhoneAlt } from 'react-icons/fa';

export const Contact = ({ contact, deleteContact }) => {
  return (
    <li>
      <div>
        <IoMdPerson /> {contact.name}
        <br />
        <FaPhoneAlt /> {contact.number}
      </div>
      <button
        onClick={() => deleteContact(contact.id)}
        className={styles.button}
      >
        Delete
      </button>
    </li>
  );
};
