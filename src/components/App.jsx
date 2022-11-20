import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
// import Register from "pages/Register";
// import Login from "pages/Login";
// import Contacts from "pages/Contacts";
// import Home from "pages/Home";
import { Layout } from "./Layout";
import { PrivateRoute } from "./PrivateRoute";
import { RestrictedRoute } from "./RestrictedRoute";
import { useAuth } from "hooks";
import { useEffect, lazy } from "react";
import { refreshUser } from "redux/auth/operations";

const HomePage = lazy(() => import('pages/Home'));
const ContactsPage = lazy(() => import('pages/Contacts'));
const RegisterPage = lazy(() => import('pages/Register'));
const LoginPage = lazy(()=> import('pages/Login'))

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth;

  useEffect(() => {
    dispatch(refreshUser())
  },[dispatch])

  return isRefreshing ? (
    <b> Refreshing user...</b>
  ) : (
    <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<HomePage/>}/>
        <Route path="/register" element={<RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />} />
        <Route path="/login" element={<RestrictedRoute redirectTo="/contacts" component={<LoginPage />}/>} />
        <Route path="/contacts" element={<PrivateRoute redirectTo="/login" component={<ContactsPage />} />} />
      </Route>
    </Routes>
  );
};
