import {} from 'react-router-dom';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { HomePage } from '../pages/Home';
import { Ciclo } from '../pages/Ciclo';
import { SideBar } from '../components/SideBar';
import CicloHistory from '../components/CicloHistory';

export const AppRoutes = () => {

    return (
        <BrowserRouter>
             <Routes>
                <Route path="/home" element={<HomePage />} />
                <Route path="/ciclo" element={<Ciclo />} />
                <Route path="/sidebar" element={<SideBar />} />
                <Route path="/registro" element={<CicloHistory />} />

                <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
        </BrowserRouter>
    )

}
