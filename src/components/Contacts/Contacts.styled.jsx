import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  list-style-type: none;
  font-weight: 600;
`;

export const ListItem = styled.li`
  margin-bottom: 5px;
`;

export const Button = styled.button`
  margin-left: 25px;
  border: none;
  background-color: inherit;
  font-weight: 500;

  &:hover {
    color: red;
  }
`;
