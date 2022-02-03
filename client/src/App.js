import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import AuthService from "./services/auth.service";
import Login from "./components/Login";
import Signup from "./components/Signup";
// import Home from "./components/Home";
// import Private from "./components/Private";
import "bootstrap/dist/css/bootstrap.min.css";
import Upload from "./components/Upload";
import Getdata from "./components/Getdata";
import App2 from "./App2"

function App() {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
  };

  return (
    <div>
    {/* <Getdata/> */}
     
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/home"} className="nav-link">
              Home
            </Link>
          </li>
          {currentUser && (
            <li className="nav-item">
              <Link to={"/swiper"} className="nav-link">
             Swiper
              </Link>
            </li>
          )}

          {currentUser && (
            <li className="nav-item">
              <Link to={"/upload"} className="nav-link">
               Uploadd
              </Link>
            </li>
          )}
          
        </div>

        {currentUser ? (
          <div className="navbar-nav ms-auto">
            <li className="nav-item">
              <a href="/login" className="nav-link" onClick={logOut}>
                Logout
              </a>
            </li>
          </div>
        ) : (
          <div className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/signup"} className="nav-link">
                Sign uph
              </Link>
            </li>
          </div>
        )}
      </nav>


      <div className="container mt-3">
        <Routes>
          {/* <Route path="/home" element={<Home />} />
          <Route path="/private" element={<Private />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/getdata" element={<Getdata />} />
          <Route path="/swiper" element={<App2 />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;




