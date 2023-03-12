import { PropTypes } from 'prop-types';
import { Formik } from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import {
  FormField,
  ErrorMessage,
  Form,
  Field,
  Button,
} from 'components/Form/Form.styled';

export const ContactForm = ({ onSave }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={schema}
      onSubmit={(values, { resetForm }) => {
        onSave({
          id: nanoid(),
          ...values,
        });
        resetForm();
      }}
    >
      <Form>
        <FormField>
          Name
          <Field
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <ErrorMessage name="name" component="p" />
        </FormField>
        <FormField>
          Number
          <Field
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <ErrorMessage name="number" component="p" />
        </FormField>
        <Button type="submit">Add Contact</Button>
      </Form>
    </Formik>
  );
};

const schema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'To Short!')
    .max(30, 'To Long')
    .required('Required'),
  number: yup
    .string()
    .min(7, 'To Short!')
    .max(13, 'To Long')
    .required('Required'),
});

ContactForm.propTypes = {
  onSave: PropTypes.func.isRequired,
};
