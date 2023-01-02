import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostView from "./Layout-pages/PostView";
import LandingPage from "./Layout-pages/LandingPage";
import Create from "./Layout-pages/Create";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/post" element={<PostView />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
