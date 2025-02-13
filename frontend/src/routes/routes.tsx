import {} from 'react-router-dom';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Home } from '../pages/Home';
import { Ciclo } from '../pages/Ciclo';
import { SideBar } from '../components/SideBar';



export const AppRoutes = () => {

    return (
        <BrowserRouter>
             <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/ciclo" element={<Ciclo />} />
                <Route path="/sidebar" element={<SideBar />} />
                <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
        </BrowserRouter>
    )

}
