import { Link } from 'react-router-dom';
import './styles.css';


export const SideBar = () => {

    return (
        <nav className="sidebar">

            <div className="nav-header">
                <h1>Immersion</h1>
                <div className="btn-togle">
                    <i className="fa-duotone fa-light fa-bars"></i>
                </div>
            </div>
            <hr />
            <div className="nav-content">
                <li className="nav-item">
                    <a href="#">
                        <i className="fa-light fa-house"></i>
                        <span>Home</span>
                    </a>
                </li>

                <li className="nav-item">
                    <Link to="/ciclo">
                        <i className="fa-light fa-clipboard"></i>
                        <span>Ciclo</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/registro">
                        <i className="fa-light fa-clock-rotate-left" />
                        <span>Registros</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <a href="#">
                        <i className="fa-light fa-chart-line"></i>
                        <span>Desempenho</span>
                    </a>
                </li>

                <li className="nav-item">
                    <a href="#">
                        <i className="fa-light fa-gear"></i>
                        <span>Configurações</span>
                    </a>
                </li>
            </div>

            <div className="nav-footer">
                <div className="nav-footer-head">
                    <div className="nav-footer-avatar">
                        <img src="https://cdn-icons-png.flaticon.com/512/3242/3242257.png" alt="" />
                    </div>
                    <div className='nav-footer-user'>
                        <strong> 'Usuário nick'</strong>
                    </div>
                </div>
            </div>
        </nav>
    );
};