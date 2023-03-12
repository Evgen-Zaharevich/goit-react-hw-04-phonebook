import { PropTypes } from 'prop-types';
import { Text, Input } from 'components/Filter/Filter.styled';

export function Filter({ onInputFilter }) {
  return (
    <>
      <Text>Find contacts by name</Text>
      <Input type="text" onChange={onInputFilter} />
    </>
  );
}

Filter.propTypes = {
  onInputFilter: PropTypes.func.isRequired,
};
