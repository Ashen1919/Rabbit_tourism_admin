import { Toaster } from "react-hot-toast";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/" />
        <Route path="/admin/*" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
