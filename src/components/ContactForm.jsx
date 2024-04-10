import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import css from './ContactForm.module.css'
const FeedbackSchema = Yup.object().shape({
  username: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
  phone: Yup.string().required("Required"),
  
});

const initialValues = {
  name: "",
  phone: "",
  
};

export default function ContactForm() {
  const nameFieldId = useId();
  const phoneFieldId = useId();
 

  const handleSubmit = (values, actions) => {
    console.log(values);
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
          <Field className={css.text} type="text" name="username" id={nameFieldId} />
          <ErrorMessage name="username" component="span" />
        </div>

        <div>
          <label htmlFor={phoneFieldId}>Number</label>
          <Field className={css.text} type="tel" name="phone" id={phoneFieldId} />
          <ErrorMessage name="phone" component="span" />
        </div>

        <button className={css.addbtn} type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
};