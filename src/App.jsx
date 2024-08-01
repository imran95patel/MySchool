import "animate.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageNotFound from "./Pages/PageNotFound";
import Home from "./Pages/Home";
import ContactUs from "./Pages/ContactUs";
import Teacher from "./Pages/Teacher";
import Login from "./Pages/Login";
import Holiday from "./Pages/Holiday";
import "remixicon/fonts/remixicon.css";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/holiday" element={<Holiday />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
