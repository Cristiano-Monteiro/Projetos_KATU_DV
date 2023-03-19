import { BrowserRouter, Routes, Route } from "react-router-dom";

import KatudvPage from "./KatudvPageComponents/KatudvPage/KatudvPage";
import FmeiPage from "./FmeiPageComponents/FmeiPage/FmeiPage";
import FmeiDashboard from "./FmeiDashboardComponents/FmeiDashboard/FmeiDashboard";

export default function ProjectPagesRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<KatudvPage/>} />
                <Route path="/facilitamei" element={<FmeiPage/>} />
                <Route path="/facilitamei/dashboard" element={<FmeiDashboard/>} />
            </Routes>
        </BrowserRouter>
    );
};