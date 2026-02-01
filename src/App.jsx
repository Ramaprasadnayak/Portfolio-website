import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import HomePage from "./pages/homePage";
import Projects from "./pages/projectPage";
import NavBar from "./components/navBar";
import SkillPage from "./pages/skillsPage";
import ResumePage from "./pages/resumePage";
import ContactPage from "./pages/contact";
import Certificate from "./pages/certificate";
function App() {
  return (
    <BrowserRouter>
      <Mainlayout></Mainlayout>
    </BrowserRouter>
  )
}

function Mainlayout() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/project" element={<Projects/>}/>
        <Route path="/skills" element={<SkillPage/>}/>
        <Route path="/certificates" element={<Certificate/>}/>
        <Route path="/resume" element={<ResumePage/>}/>
        <Route path="/contacts" element={<ContactPage/>}/>
      </Routes>
    </>
  )
}

export default App
