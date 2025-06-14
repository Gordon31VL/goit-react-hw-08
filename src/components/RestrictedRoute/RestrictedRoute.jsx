import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUserToken } from '../../redux/auth/selectors';

export default function RestrictedRoute({ children }) {
  const token = useSelector(selectUserToken);
  return !token ? children : <Navigate to="/contacts" replace />;
}