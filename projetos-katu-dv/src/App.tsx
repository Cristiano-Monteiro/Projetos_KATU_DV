import { BrowserRouter, Routes, Route } from "react-router-dom";

/* import { KatuPage } from "./pages/Katu_Page/KatuPage";
import { FmeiPage } from "./pages/Fmei_Page/FmeiPage";
import { FmeiDashboard } from "./pages/Fmei_Dashboard/FmeiDashboard"; */

import KatudvPage from "./pages/KatudvPageComponents/KatudvPage/KatudvPage";
import FmeiPage from "./pages/FmeiPageComponents/FmeiPage/FmeiPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<KatudvPage/>} />
        <Route path="/facilitamei" element={<FmeiPage/>} />
        <Route path="/facilitamei/dashboard" />
      </Routes>
    </BrowserRouter>
  )
};