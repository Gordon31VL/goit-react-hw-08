import "../../css/reset.css"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../../pages/HomePage/HomePage'
import RegistrationPage from '../../pages/RegistrationPage/RegistrationPage'
import LoginPage from '../../pages/LoginPage/LoginPage'
import ContactsPage from '../../pages/ContactsPage/ContactsPage'
import { fetchContacts } from '../../redux/contacts/operations'
import { refreshUser } from '../../redux/auth/operations'
import { selectUserToken } from '../../redux/auth/selectors'
import RestrictedRoute from '../RestrictedRoute/RestrictedRoute'
import PrivateRoute from '../PrivateRoute/PrivateRoute'
import Layout from '../Layout/Layout'

function App() {
  const dispatch = useDispatch();
  const userToken = useSelector(selectUserToken);

  useEffect(() => {
    if (userToken) {
      dispatch(refreshUser());
      dispatch(fetchContacts());
    }
  }, [dispatch, userToken])

  return (
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
