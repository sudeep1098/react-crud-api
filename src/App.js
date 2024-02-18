import "./App.css";
import { Routes, Route } from "react-router-dom";
import Create from "./components/Create";
import Read from "./components/Read";
import Edit from "./components/Edit";
import Reducer from "./components/Reducer";
import Redux from "./components/Redux";
function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Read />}></Route>
        <Route path="/create" element={<Create />}></Route>
        <Route path="/edit" element={<Edit />}></Route>
        <Route path="/count" element={<Reducer />}></Route>
        <Route path="/redux-count" element={<Redux />}></Route>
      </Routes>
    </div>
  );
}

export default App;
