import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUserToken } from '../../redux/auth/selectors';

export default function PrivateRoute({ children }) {
  const token = useSelector(selectUserToken);
  return token ? children : <Navigate to="/login" replace />;
}