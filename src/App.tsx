import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import ErrorPage from "./Comoponents/ErrorPage";
import Home from "./Comoponents/Home";
import NavBar from "./Comoponents/NavBar";
import SingleArticlePage from "./Comoponents/SingleArticlePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/singlearticlepage/:ArticleId" element={<SingleArticlePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
