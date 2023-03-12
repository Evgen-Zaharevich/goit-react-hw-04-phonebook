import PropTypes from 'prop-types';

import { Title } from 'components/Section/Section.styled';

export function Section({ title, children }) {
  return (
    <>
      {<Title>{title}</Title>}
      {children}
    </>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
