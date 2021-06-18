import React from "react";
import PropTypes from 'prop-types';
import styles from "./ContactList.module.css";
import ContactListItem from "../ContactListItem/ContactListItem"

const ContactList = ({ contacts,onDeleteContact}) => (
        <ul className={styles.contactList}>
            {contacts.map((contact) => (
                <ContactListItem key={contact.id} contact={contact} onDeleteContact={onDeleteContact} />
        ))}
        </ul>
)

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })).isRequired,
}

export default ContactList;