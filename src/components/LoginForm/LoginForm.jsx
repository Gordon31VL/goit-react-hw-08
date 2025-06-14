import { Formik, Form, Field, ErrorMessage } from 'formik';
import { loginUser } from "../../redux/auth/operations";
import { useDispatch } from 'react-redux';

export default function LoginForm() {
    const dispatch = useDispatch();

    const handleLogin = (values) => {
        dispatch(loginUser(values));
    };
    
    const initialValues = {
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
        return errors;
    }; 
    return <div>
        <Formik initialValues={initialValues} validate={validate} onSubmit={handleLogin}>
            <Form>
                <div>
                    <label htmlFor="email">Email</label>
                    <Field type="email" name="email" id="email" autoComplete="email" />
                    <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <Field type="password" name="password" id="password" autoComplete="current-password" />
                    <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
                </div>
                <button type="submit">Login</button>
            </Form>
        </Formik>
    </div>
}
