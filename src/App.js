import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./components/screens/MainPage";
import Header from "./components/includes/Header";
// import NoMatch from "./components/screens/NoMatch";
// import LogIn from "./components/screens/LogIn";
// import SignUp from "./components/screens/SignUp";

function App() {
  return (
      <>
          <Router>
              <Header />
              <Routes>
                  <Route path="/" element={<MainPage />} />
                  {/* <Route path="/subpage/:id" element={<LogIn />} /> */}
                  {/* <Route path="/subpage/:id" element={<SignUp />} /> */}
                  {/* <Route path="*" element={<NoMatch />} /> */}
              </Routes>
          </Router>
      </>
  );
}

export default App;
