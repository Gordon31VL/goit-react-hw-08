import { useDispatch } from "react-redux";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import { registerUser } from "../../redux/auth/operations";

export default function RegisterPage() {
    const dispatch = useDispatch();

    const handleLogin = (values) => {
        dispatch(registerUser(values));
        console.log(values);
    };

    return (
            <div>
                <RegistrationForm onSubmit={handleLogin} />
            </div>
        )
}