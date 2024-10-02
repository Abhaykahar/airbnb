import Login from "./components/Login";
import Main from "./components/Main";
import { Route,Routes } from "react-router-dom";
import Signup from "./components/Signup";



function App() {
  return (
    <>
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/" element={<Main/>}/>
    </Routes>
      {/* <Main/> */}
      {/* <Menubar/> */}
    </>
  );
}

export default App;
