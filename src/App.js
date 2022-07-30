import Home from "./Components/Container";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Details from "./Components/Details";


function App() {



  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} /> 
        <Route exact path="/details" element={<Details />} />

      </Routes>
    </Router>

     </>
  );
}

export default App;
