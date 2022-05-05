import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Layout>
        <Route path="/" element={<Home></Home>}></Route>
      </Layout>
    </Router>
  );
}

export default App;
