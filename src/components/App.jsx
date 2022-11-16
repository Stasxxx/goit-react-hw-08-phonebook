import { Routes,Route } from "react-router-dom";
import { RegisterForm } from "components/RegisterForm/RegisterForm";
import { LogIn } from "./LogIn/LogIn";
import { ContactsList } from "./ContactsList/ContactsList";
import { Layout } from "./Layout";
import { PrivateRoute } from "./PrivateRoute";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/register" element={<RegisterForm />} />
        
        <Route path="/login" element={<LogIn />} />
        <Route path="/contacts" element={<PrivateRoute redirectTo="/login" component={<ContactsList />} />} />
      </Route>
    </Routes>
  );
};
