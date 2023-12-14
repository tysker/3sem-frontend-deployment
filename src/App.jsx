import './styles/App.css'
import {Route, Routes} from "react-router-dom";
import LoginPage from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import AuthProvider from "./components/authentication/AuthProvider.jsx";
import Header from "./components/header/Header.jsx";


const App = () => {


    return (
        <AuthProvider>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<LoginPage/>}/>
            </Routes>
        </AuthProvider>
    );
}

export default App
