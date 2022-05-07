import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TechTalk from "./pages/TechTalk";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/TechTalk" element={<TechTalk />}></Route>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
