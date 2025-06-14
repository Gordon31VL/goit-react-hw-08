import { Formik, Form, Field, ErrorMessage } from 'formik';

export default function RegistrationForm({ onSubmit }) {
    const initialValues = {
        name: '',
        email: '',
        password: '',
    };
      
    const validate = values => {
        const errors = {};
        if (!values.email) {
            errors.email = 'Required';
        }
        if (!values.password) {
            errors.password = 'Required';
        }
        if (!values.name) {
            errors.name = 'Required';
        }
        return errors;
    };
    return (
        <div>
            <Formik initialValues={initialValues} validate={validate} onSubmit={onSubmit}>
                <Form>
                    <div>
                        <label htmlFor="name">Name</label>
                        <Field type="name" name="name" id="name" autoComplete="name" />
                        <ErrorMessage name="name" component="div" style={{ color: 'red' }} />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <Field type="email" name="email" id="email" autoComplete="email"/>
                        <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <Field type="password" name="password" id="password" autoComplete="current-password"/>
                        <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
                    </div>
                    <button type="submit">Register</button>
                </Form>
            </Formik>
        </div>)
    
}
