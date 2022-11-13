import { Header} from "./AppBar.styled"
import { Navigation } from "components/Navigation/Navigation"
import { AuthNav } from "components/AuthNav/AuthNav"

export const AppBar = () => {
    return (
        <Header>
            <Navigation/>
            <AuthNav/>
        </Header>
    )
}