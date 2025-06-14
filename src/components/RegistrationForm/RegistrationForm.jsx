import { Formik, Form, Field, ErrorMessage } from 'formik';
import { registerUser } from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';

export default function RegistrationForm() {
    const dispatch = useDispatch(); 
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

    const handleLogin = (values) => {
        dispatch(registerUser(values));
        console.log(values);
    };

    return (
        <div>
            <Formik initialValues={initialValues} validate={validate} onSubmit={handleLogin}>
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
