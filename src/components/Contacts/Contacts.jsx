// import PropTypes from 'prop-types';
import { List, ListItem, Button } from 'components/Contacts/Contacts.styled';

export function Contacts({ contacts, onDeleteUser }) {
  console.log(contacts);
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          {name}: {number}
          <Button
            type="button"
            onClick={() => {
              onDeleteUser(id);
            }}
          >
            Delete
          </Button>
        </ListItem>
      ))}
    </List>
  );
}

// Contacts.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   onDeleteUser: PropTypes.func.isRequired,
// };
