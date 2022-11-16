import { Link } from "./Navigation.styled"

export const Navigation = () => {
    return (
        <nav>
            <Link to="/" end> Home</Link>
            <Link to="/contacts"> Contacts</Link>
        </nav>
    )
}