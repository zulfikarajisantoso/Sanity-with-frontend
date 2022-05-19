import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { gapi } from "gapi-script";
import { useEffect } from "react";

const ClientId =
  "57977112697-2k07pa3c7o8lvujop5irt2o09vjfpl8e.apps.googleusercontent.com";

function App() {
  useEffect(() => {
    function start() {
      gapi.client.init({
        ClientId: ClientId,
      });
    }
    gapi.load("client:auth2", start);
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
