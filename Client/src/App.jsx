import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return ( 
    <BrowserRouter>
    <GoogleOAuthProvider clientId= {import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      </GoogleOAuthProvider>
    </BrowserRouter>
  );
}

export default App;
