import styled from 'styled-components';
import {
  Form as FormikForm,
  ErrorMessage as FormikError,
  Field as FormikField,
} from 'formik';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormField = styled.label`
  font-size: 20px;
  margin-bottom: 50px;
  font-weight: 700;
`;

export const ErrorMessage = styled(FormikError)`
  color: red;
`;

export const Field = styled(FormikField)`
  width: 250px;
  height: 20px;
  background-color: inherit;
  border: 1px solid black;
  border-radius: 5px;

  margin-left: 10px;

  &:hover {
    border-color: red;
  }
`;

export const Button = styled.button`
  font-size: 30px;
  border: none;
  background-color: inherit;

  &:hover {
    color: red;
  }
`;
