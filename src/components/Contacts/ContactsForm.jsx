import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Field } from 'formik';
import { FormBox } from './ContactsForm.styled';

const initialValues = {
  name: '',
  number: '',
};

export const ContactsForm = ({ handleSubmit }) => {
  const onSubmit = (value, { resetForm }) => {
    handleSubmit(value);

    resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <FormBox>
        <label>
          Name
          <Field
            type="text"
            name="name"
            pattern="^[A-Za-z\u0080-\uFFFF ']+$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Number
          <Field
            type="tel"
            name="number"
            pattern="^(\+?[0-9.\(\)\-\s]*)$"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </FormBox>
    </Formik>
  );
};

ContactsForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
