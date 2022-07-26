
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";


import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";

import Home from "./components/Home";


const App = () => {
  return (
    <div>
      <Routes>
        <LoginForm />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
    </div >
  );
}
export default App;
