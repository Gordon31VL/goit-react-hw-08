import { Formik, Form, Field } from "formik";
import { useId } from "react";
import styles from "./ContactForm.module.css"
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";


export default function ContactForm() {
    const dispatch = useDispatch();

    const nameFieldId = useId();
    const numberFieldId = useId();
    const initialValues = {
        name: "",
        number: ""
    }

    const handlerSubmit = (values, actions) => {
        dispatch(
            addContact({
                name: values.name,
                number: values.number,
            })
        )
        actions.resetForm();
    }

    return (    
        <Formik initialValues={initialValues} onSubmit={handlerSubmit}>
            <Form className={styles.FormBox}>
                <label htmlFor={nameFieldId}>Name</label>
                <Field type="text" name="name" id={nameFieldId} className={styles.textInput}></Field>
                <label htmlFor={numberFieldId}>Number</label>
                <Field type="text" name="number" id={numberFieldId} className={styles.textInput}></Field>
                <button type="submit" className={styles.btn}>Add contact</button>
            </Form>
        </Formik>
    )    
}