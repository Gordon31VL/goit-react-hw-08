import LoginForm from "../../components/LoginForm/LoginForm";
import { useDispatch } from 'react-redux';
import { loginUser } from "../../redux/auth/operations";

export default function LoginPage() {
    const dispatch = useDispatch();

    const handleLogin = (values) => {
        dispatch(loginUser(values));
    };
    
    return (
        <div>
            <LoginForm onSubmit={handleLogin} />
        </div>
    )
}