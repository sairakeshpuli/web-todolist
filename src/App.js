
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";


import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";

import Home from "./components/Home";
import Footer from "./components/Footer";


const App = () => {
  return (
    <div>

      <RegisterForm />
      <LoginForm />
    </div >
  );
}
export default App;
