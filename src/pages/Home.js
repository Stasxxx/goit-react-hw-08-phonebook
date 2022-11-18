import { useAuth } from "hooks/useAuth";

export const Home = () => {
    const { user } = useAuth();
    return (
        <div>
            <h1>Welcome {user.name} to the contacts book page!</h1>
        </div>
    )
}