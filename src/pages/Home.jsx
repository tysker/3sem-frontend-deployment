import {useContext} from "react";
import CreateAuthContext from "../components/authentication/CreateAuthContext.jsx";
const Home = () => {

    const {user, login} = useContext(CreateAuthContext);

    return (
        <>
            <h1>Home</h1>
            {login ? <p>Logged In</p> : <p>Logged Out</p>}
            <p>Username: {user != null ? user.username : "No Name" }</p>
            <ul>Roles: {user != null ? user.roles.map( r => <li key={r}>{r}</li>) : ""}</ul>
            <p>Home page content</p>
        </>
    )
}

export default Home;