import { useDispatch } from "react-redux"
import { logoutUser } from "../../redux/auth/operations";
import { useNavigate } from "react-router-dom";

export default function LogoutButton() {
    const dispatch = useDispatch();
    const navigate = useNavigate(); 

    const handlerLogout = () => {   
        dispatch(logoutUser()).then(() => navigate('/login')); 
    } 
    return (
        <button type="button" onClick={handlerLogout}>logout</button>
    )
}