import { Routes,Route } from "react-router-dom";
import { RegisterForm } from "components/RegisterForm/RegisterForm";
import { LogIn } from "./LogIn/LogIn";
import { Contacts } from "pages/Contacts";
import { Layout } from "./Layout";
import { PrivateRoute } from "./PrivateRoute";
import {RestrictedRoute} from "./RestrictedRoute"

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/register" element={<RestrictedRoute redirectTo="/contacts" component={<RegisterForm />} />} />
        
        <Route path="/login" element={<RestrictedRoute redirectTo="/contacts" component={<LogIn />}/>} />
        <Route path="/contacts" element={<PrivateRoute redirectTo="/login" component={<Contacts />} />} />
      </Route>
    </Routes>
  );
};
