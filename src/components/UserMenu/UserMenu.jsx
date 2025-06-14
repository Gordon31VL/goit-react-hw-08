import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../redux/auth/operations';
import { selectUser} from '../../redux/auth/selectors';
import styles from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={styles.userMenu}>
      <p>Welcome, <span>{user.email}</span></p>
      <button onClick={() => dispatch(logoutUser())}>Logout</button>
    </div>
  );
}