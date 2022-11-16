import { useDispatch } from "react-redux";
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';

export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();
    console.log(user)
    return (
        <div>
            <p>Welcom, {user.name}</p>
            <button type="button" onClick={() => dispatch(logOut())}>
                Logout
            </button>
        </div>
    )
}