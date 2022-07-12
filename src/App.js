import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import TechTalk from "./pages/TechTalk";
import PetLink from "./pages/PetLink";
import Weather from "./pages/Weather";
import Employee from "./pages/Employee";
import Umbrella from "./pages/Umbrella";
import Quiz from "./pages/Quiz";
import PickAFlick from "./pages/PickAFlick";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/TechTalk" element={<TechTalk />}></Route>
          <Route path="/PetLink" element={<PetLink />}></Route>
          <Route path="/Weather" element={<Weather />}></Route>
          <Route path="/Employee" element={<Employee />}></Route>
          <Route path="/Umbrella" element={<Umbrella />}></Route>
          <Route path="/Quiz" element={<Quiz />}></Route>
          <Route path="/PickAFlick" element={<PickAFlick />}></Route>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
