import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { object, string } from 'yup';
import { Formik } from 'formik';
import { Forma, Input, Btn, Error } from './PhonebookFormStyle';

const userSchema = object({
  name: string().required(),
  number: string().required().min(5).max(20),
});

export const PhonebookForm = ({ addContact }) => {
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={(values, { resetForm }) => {
        addContact({
          ...values,
          id: nanoid(),
        });
        resetForm();
      }}
      validationSchema={userSchema}
    >
      <Forma>
        <h3>Name</h3>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <Error name="name" component="div" />
        <h3>Number</h3>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <Error name="number" component="div" />
        <Btn type="submit">Add contact</Btn>
      </Forma>
    </Formik>
  );
};

PhonebookForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};
