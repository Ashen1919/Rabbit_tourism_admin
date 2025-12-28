import { Toaster } from "react-hot-toast";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login-page";
import AdminPage from "./pages/admin-page";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/" element = {<LoginPage/>} />
        <Route path="/admin/*" element = {<AdminPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
