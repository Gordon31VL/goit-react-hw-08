import "../../css/reset.css"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../../pages/HomePage/HomePage'
import RegistrationPage from '../../pages/RegistrationPage/RegistrationPage'
import LoginPage from '../../pages/LoginPage/LoginPage'
import ContactsPage from '../../pages/ContactsPage/ContactsPage'
import { refreshUser } from '../../redux/auth/operations'
import RestrictedRoute from '../RestrictedRoute/RestrictedRoute'
import PrivateRoute from '../PrivateRoute/PrivateRoute'
import Layout from '../Layout/Layout'
import { selectIsLoggedIn, selectIsRefreshing } from "../../redux/auth/selectors"
import { fetchContacts } from "../../redux/contacts/operations"


function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoggedIn = useSelector(selectIsLoggedIn)

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchContacts());
    }
  });

  return isRefreshing ? (
    <strong>Refreshing user...</strong>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="register" element={<RestrictedRoute><RegistrationPage /></RestrictedRoute>} />
        <Route path="login" element={<RestrictedRoute><LoginPage /></RestrictedRoute>} />
        <Route path="contacts" element={<PrivateRoute><ContactsPage /></PrivateRoute>} />
      </Route>
    </Routes>
  );
}

export default App
