import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Sports } from "./pages/Sports";
import { Activities } from "./pages/Activities";
import { SocialSpaces } from "./pages/SocialSpaces";
import { Contact } from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="el-club" element={<About />} />
          <Route path="deportes" element={<Sports />} />
          <Route path="actividades" element={<Activities />} />
          <Route path="espacios" element={<SocialSpaces />} />
          <Route path="contacto" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
