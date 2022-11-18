import { Header } from "./AppBar.styled";
import { Navigation } from "components/Navigation/Navigation";
import { AuthNav } from "components/AuthNav/AuthNav";
import { UserMenu } from "components/UserMenu/UserMenu";
import { useAuth } from "hooks";

export const AppBar = () => {
    const { isLoggedIn } = useAuth();

    return (
        <Header>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Header>
    );
};