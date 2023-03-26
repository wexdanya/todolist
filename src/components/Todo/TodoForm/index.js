import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import cx from "classnames";
import styles from "./TodoForm.module.scss";

const SHEMA = Yup.object({
  task: Yup.string()
    .min(3, "Min 3 symbols")
    .max(25, "Max 25 symbols")
    .required("Cant be empty"),
});

const initialValues = { task: "" };
const TodoForm = (props) => {
  const { addTask } = props;
  const onSubmit = (values, formikBag) => {
    addTask(values);
    formikBag.resetForm();
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={SHEMA}
      >
        {() => {
          return (
            <Form className={styles.wrapper}>
              <Field name="task" type="text">
                {({ field, form, meta }) => {
                  const classNames = cx(styles.input, {
                    [styles.errorInput]:
                      meta.touched && meta.error ? true : false,
                  });
                  return (
                    <input
                      className={classNames}
                      {...field}
                      placeholder="Add task"
                    />
                  );
                }}
              </Field>
              <ErrorMessage
                name="task"
                className={styles.errorMessage}
                component="span"
              />
              <Field
                className={styles.button}
                type="submit"
                value="+"
                name="submit"
              />
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default TodoForm;
