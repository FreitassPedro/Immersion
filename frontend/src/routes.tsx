import {} from 'react-router-dom';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Home } from './pages/Home';
import { Ciclo } from './pages/Ciclo';

export const AppRoutes = () => {

    return (
        <BrowserRouter>
             <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/ciclo" element={<Ciclo />} />

                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    )

}
