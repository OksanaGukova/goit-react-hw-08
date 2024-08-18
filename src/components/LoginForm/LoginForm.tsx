import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import css from './LoginForm.module.css'
import { AppDispatch } from "../../redux/store";
import { Credentials } from "../App/App.types";

export const LoginForm = () => {
  const dispatch: AppDispatch = useDispatch();

  const handleSubmit = (
    values: Credentials,
    { setSubmitting }: FormikHelpers<Credentials>
  ) => {
    dispatch(logIn(values))
      .unwrap()
      .then(() => {
        console.log("login success");
      })
      .catch(() => {
        console.log("login error");
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <Formik initialValues={{ email: "", password: "" }} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form className={css.loginForm} autoComplete="off">
          <label>
            Email
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </label>
          <label>
            Password
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
          </label>
          <button type="submit" disabled={isSubmitting}>
            Log In
          </button>
        </Form>
      )}
    </Formik>
  );
};