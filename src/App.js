import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import TechTalk from "./pages/TechTalk";
import PetLink from "./pages/PetLink";
import Weather from "./pages/Weather";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/TechTalk" element={<TechTalk />}></Route>
          <Route path="/PetLink" element={<PetLink />}></Route>
          <Route path="/Weather" element={<Weather />}></Route>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
