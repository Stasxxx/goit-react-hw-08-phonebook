import { Link } from "./AuthNav.styled";

export const AuthNav = () => {
    return (
        <div>
            <Link to="/register" end>Registetion</Link>
            <Link to="/login">Login</Link>
        </div>
    )
}