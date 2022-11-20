import { useAuth } from "hooks/useAuth";
import { Greeting, Title } from "./Home.styled";

export const Home = () => {
    const { user } = useAuth();
    return (
        <Greeting>
            <Title>
                Welcome {user.name} to the contacts book page!
            </Title>
        </Greeting>
    )
}