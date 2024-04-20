import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import css from './ContactForm.module.css';

const regex = {
  phoneNumber: /^[0-9]{3}[-]{1}[0-9]{2}[-]{1}[0-9]{2}$/,
}

const FeedbackSchema = Yup.object().shape({
  name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
  number: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .matches(regex.phoneNumber, "Number format: 000-00-00")
    .required("Required"), 
});

const initialValues = {
  name: "",
  number: "", 
};

export default function ContactForm({ onAdd }) {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
     
    onAdd({
      id: Math.random().toString(36).substring(7), 
      name: values.name,
      number: values.number,
    }); 
    actions.resetForm();
  };

  return (
    <Formik 
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <div>
          <label htmlFor={nameFieldId}>Name</label>
          <Field className={css.text} type="text" name="name" id={nameFieldId} />
          <ErrorMessage name="name" component="span" />
        </div>

        <div>
          <label htmlFor={numberFieldId}>Number</label>
          <Field className={css.text} type="tel" name="number" id={numberFieldId} /> 
          <ErrorMessage name="number" component="span" /> 
        </div>

        <button className={css.addbtn} type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
}