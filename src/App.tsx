import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Sports } from "./pages/Sports";
import { FederativeSports } from "./pages/FederativeSports";
import { SportsSchools } from "./pages/SportsSchools";
import { Activities } from "./pages/Activities";
import { OtherActivities } from "./pages/OtherActivities";
import { SocialSpaces } from "./pages/SocialSpaces";
import { Contact } from "./pages/Contact";
import { MemberComingSoon } from "./pages/member/MemberComingSoon";
import { MemberLogin } from "./pages/member/MemberLogin";
import { MemberDashboard } from "./pages/member/MemberDashboard";
import { MemberSolicitudes } from "./pages/member/MemberSolicitudes";
import { NuevaSolicitud } from "./pages/member/NuevaSolicitud";
import { MemberQuinchos } from "./pages/member/MemberQuinchos";
import { NuevaReservaQuincho } from "./pages/member/NuevaReservaQuincho";
import { MemberLayout } from "./components/member/MemberLayout";
import { MemberAuthProvider } from "./contexts/MemberAuthContext";

function App() {
  return (
    <MemberAuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* ─── Public Pages ─── */}
            <Route index element={<Home />} />
            <Route path="el-club" element={<About />} />
            <Route path="deportes" element={<Sports />} />
            <Route path="deportes/federativos" element={<FederativeSports />} />
            <Route path="deportes/escuelitas" element={<SportsSchools />} />
            <Route path="actividades/otras" element={<OtherActivities />} />
            <Route path="actividades/tercerizadas" element={<Activities />} />
            <Route path="espacios" element={<SocialSpaces />} />
            <Route path="contacto" element={<Contact />} />

            {/* ─── Mi Banade: Coming Soon (public) ─── */}
            <Route path="mi-banade" element={<MemberComingSoon />} />
            <Route path="mi-banade/login" element={<MemberLogin />} />

            {/* ─── Mi Banade: Authenticated Portal ─── */}
            <Route path="mi-banade" element={<MemberLayout />}>
              <Route path="inicio" element={<MemberDashboard />} />
              <Route path="solicitudes" element={<MemberSolicitudes />} />
              <Route path="solicitudes/nueva" element={<NuevaSolicitud />} />
              <Route path="quinchos" element={<MemberQuinchos />} />
              <Route path="quinchos/nueva" element={<NuevaReservaQuincho />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </MemberAuthProvider>
  );
}

export default App;
