import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import CreateAuthContext from "./CreateAuthContext";
import {useState} from "react";


const AuthProvider = ({ children }) => {

    const init = {
        username: "",
        roles: "",
    }

    const [user, setUser] = useState(null);
    const [token, setToken] = useLocalStorage("token", "");
    const navigate = useNavigate();

    const login = async (data) => {
        setUser({ username: data.username, roles: [...data.roles]});
        setToken(data.token);
        navigate("/", { replace: true });
    };

    const logout = () => {
        setUser(init);
        setToken(null);
        navigate("/", { replace: true });
    };

    const value = {user, login, logout};

    return <CreateAuthContext.Provider
        value={value}>
        {children}
    </CreateAuthContext.Provider>;
};


export default AuthProvider;