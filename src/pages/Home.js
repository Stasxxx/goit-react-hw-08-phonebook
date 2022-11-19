import { useAuth } from "hooks/useAuth";
import { Greeting } from "./Home.styled";
export const Home = () => {
    const { user } = useAuth();
    return (
        <Greeting>
            <h1>Welcome {user.name} to the contacts book page!</h1>
        </Greeting>
    )
}