import { ContactItem } from 'components/ContactItem/ContactItem';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return contacts.map(({ name, number, id }) => (
    <ContactItem
      key={id}
      name={name}
      number={number}
      onDeleteContact={() => onDeleteContact(id)}
    />
  ));
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
