import "./App.css";
import { Routes, Route } from "react-router-dom";
import Create from "./components/Create";
import Read from "./components/Read";
import Edit from "./components/Edit";
<<<<<<< HEAD
import Reducer from "./components/Reducer";
=======
>>>>>>> 0aa407151ab7ca18263a617fc783ecce9aad1d9a
import Redux from "./components/Redux";
function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Read />}></Route>
        <Route path="/create" element={<Create />}></Route>
        <Route path="/edit" element={<Edit />}></Route>
<<<<<<< HEAD
        <Route path="/count" element={<Reducer />}></Route>
        <Route path="/redux-count" element={<Redux />}></Route>
=======
        <Route path="/count" element={<Redux />}></Route>
>>>>>>> 0aa407151ab7ca18263a617fc783ecce9aad1d9a
      </Routes>
    </div>
  );
}

export default App;
