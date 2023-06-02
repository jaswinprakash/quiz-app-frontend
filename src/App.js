import "./App.css";
import { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./components/screens/MainPage";
import NoMatch from "./components/screens/NoMatch";
import LogIn from "./components/screens/LogIn";
import SignUp from "./components/screens/SignUp";

export const UserContext = createContext();

function App() {
    const [userData, setUserData] = useState({});

    const updateUserData = (action) => {
        switch (action.type) {
            case "LOGOUT":
                setUserData(null);
                localStorage.clear();
                break;
            case "LOGIN":
                setUserData(action.payload);
                break;
            default:
                break;
        }
    };
    useEffect(() => {
        setUserData(JSON.parse(localStorage.getItem("user_data")));
    }, []);

    return (
        <>
            <UserContext.Provider value={{ userData, updateUserData }}>
                <Router>
                    <Routes>
                        <Route path="/home" element={<MainPage />} />
                        <Route path="/login" element={<LogIn />} />
                        <Route path="/signup/" element={<SignUp />} />
                        <Route path="*" element={<NoMatch />} />
                    </Routes>
                </Router>
            </UserContext.Provider>
        </>
    );
}

export default App;
