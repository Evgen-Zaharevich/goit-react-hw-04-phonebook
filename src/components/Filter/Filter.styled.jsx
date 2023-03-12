import styled from 'styled-components';

export const Text = styled.p`
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 15px;
`;

export const Input = styled.input`
  height: 20px;
  width: 350px;
  background-color: inherit;

  border: 1px solid black;
  border-radius: 5px;

  margin-bottom: 15px;

  &:hover {
    border-color: red;
  }
`;
