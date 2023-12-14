import {useContext} from "react";
import {fetchData} from "../modules/apiFacade.js";
import CreateAuthContext from "../components/authentication/CreateAuthContext";

const Login = () => {

    const createAuthContext = useContext(CreateAuthContext)
    const {user, login, logout} = createAuthContext;

    const URL_PROD = "https://api.joergoertel.dk/api/v1/auth/login"
    const URL_LOCAL = "http://localhost:7070/api/v1/auth/login"

    const loginClickHandler = async () => {
        const callback = (data) => {
            console.log("DATA", data)
            login(data)
        }

        await fetchData(URL_PROD, callback, "POST", {username: "admin", password: "admin123"})

    }

    return (
        <>
            <h1>Login</h1>
            <p>Log in to see secret page!</p>
            <button onClick={loginClickHandler}>Login</button>
            <button onClick={() => logout()}>Logout</button>
        </>
    )
}

export default Login