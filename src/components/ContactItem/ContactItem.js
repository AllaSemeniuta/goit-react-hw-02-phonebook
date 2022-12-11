import PropTypes from 'prop-types';

export const ContactItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <p key={id}>
      {name} : {number}{' '}
      <button type="button" onClick={onDeleteContact}>
        Delete
      </button>
    </p>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string,
  onDeleteContact: PropTypes.func.isRequired,
};
