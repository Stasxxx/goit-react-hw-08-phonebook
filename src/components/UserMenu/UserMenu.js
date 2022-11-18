import { useDispatch } from "react-redux";
import { Container, Name } from "./UserMenu.styled";
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';

export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();
    
    return (
        <Container>
            <Name>Welcom, {user.name}</Name>
            <button type="button" onClick={() => dispatch(logOut())}>
                Logout
            </button>
        </Container>
    )
}