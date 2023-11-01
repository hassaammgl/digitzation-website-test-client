import "./styles/App.scss";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
const Home = lazy(() => import("./components/Home/Home"));
import Loader from "./components/Loader";

function App() {
  return (
    <Router>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
