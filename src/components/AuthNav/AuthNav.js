import { Link } from "./AuthNav.styled";

export const AuthNav = () => {
    return (
        <div>
            <Link to="/register" end>Register</Link>
            <Link to="/login">Login</Link>
        </div>
    )
}