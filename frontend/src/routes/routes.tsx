import {} from 'react-router-dom';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Home } from '../pages/Home';
import { Ciclo } from '../pages/Ciclo';
import { SideBar } from '../components/SideBar';
import CicloHistory from '../components/CicloHistory';
import { Pomodoro } from '../components/Pomodoro';



export const AppRoutes = () => {

    return (
        <BrowserRouter>
             <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/ciclo" element={<Ciclo />} />
                <Route path="/sidebar" element={<SideBar />} />
                <Route path="/history" element={<CicloHistory />} />

                <Route path="teste/pomodoro" element={<Pomodoro/>} />
                <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
        </BrowserRouter>
    )

}
