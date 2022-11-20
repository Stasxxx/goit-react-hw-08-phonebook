import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { RegisterForm } from "components/RegisterForm/RegisterForm";
import { LogIn } from "./LogIn/LogIn";
import { Contacts } from "pages/Contacts";
import { Home } from "pages/Home";
import { Layout } from "./Layout";
import { PrivateRoute } from "./PrivateRoute";
import { RestrictedRoute } from "./RestrictedRoute";
import { useAuth } from "hooks";
import { useEffect } from "react";
import { refreshUser } from "redux/auth/operations";

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
        <Route index element={<Home/>}/>
        <Route path="/register" element={<RestrictedRoute redirectTo="/contacts" component={<RegisterForm />} />} />
        <Route path="/login" element={<RestrictedRoute redirectTo="/contacts" component={<LogIn />}/>} />
        <Route path="/contacts" element={<PrivateRoute redirectTo="/login" component={<Contacts />} />} />
      </Route>
    </Routes>
  );
};
