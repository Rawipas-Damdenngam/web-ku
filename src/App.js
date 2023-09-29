import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginHome from "./components/login/home";
import News from "./components/home/news/news";
import Drawer from "./components/home/drawer/drawer";
import Subject from "./components/home/subject/subject";
import Register from "./components/home/open_register/openRegister";
import Finance from "./components/home/finance/finance";
import Enroll from "./components/home/enroll/enroll";
import EnrollResult from "./components/home/enrollResult/enrollResult";
import Grade from "./components/home/grade/grade";
import EnrollHistory from "./components/home/enrollHistory/enrollHistory";
import Dashboard from "./components/home/dashboard/dashboard";
import Profile from "./components/home/profile/profile";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginHome />}></Route>
        <Route path="/news" element={<News />}></Route>
        <Route path="/drawer" element={<Drawer />}></Route>
        <Route path="/subject" element={<Subject />}></Route>
        <Route path="/openRegister" element={<Register />}></Route>
        <Route path="/finance" element={<Finance />}></Route>
        <Route path="/enroll" element={<Enroll />}></Route>
        <Route path="/enrollResult" element={<EnrollResult />}></Route>
        <Route path="/grade" element={<Grade />}></Route>
        <Route path="/enrollHistory" element={<EnrollHistory />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/profile" element={<Profile />}></Route> 
      </Routes>
    </Router>
  );
}

export default App;
