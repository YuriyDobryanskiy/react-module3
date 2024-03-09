import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './ContactForm.module.css';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, 'Must be at least 3 characters')
    .max(50, 'Must be less than 50 characters')
    .required('Required'),
  number: Yup.string()
    .min(3, 'Must be at least 3 characters')
    .max(50, 'Must be less than 50 characters')
    .required('Required'),
});

export const ContactForm = ({ addContact }) => {
  const handleSubmit = ({ name, number }, actions) => {
    addContact(name, number);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.addContact}>
        <label>
          Name
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="div" className={styles.err} />
        </label>
        <label>
          Number
          <Field type="text" name="number" />
          <ErrorMessage name="number" component="div" className={styles.err} />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
