import { useDispatch } from "react-redux";
import { Container, Name, ButtonMUI } from "./UserMenu.styled";
import Tooltip from "@mui/material/Tooltip";
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';

export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();
    
    return (
        <Container>
            <Name>Welcom, {user.name}</Name>
            {/* <button type="button" onClick={() => dispatch(logOut())}>
                Logout
            </button> */}
            <Tooltip >
                    <ButtonMUI type="button" onClick={() => dispatch(logOut())} variant="contained" color="primary" sx={{ ml: 10, mt: 1 }}>Logout</ButtonMUI>
            </Tooltip>
        </Container>
    )
}