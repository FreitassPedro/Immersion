import { Link } from 'react-router-dom';
import styles from './styles.module.css';


export const SideBar = () => {

    return (
        <nav className={styles.sidebar}>

            <div className={styles.navHeader} >
                <h1>Immersion</h1>
                <div className={styles.btnTogle}>
                    <i className="fa-duotone fa-light fa-bars"></i>
                </div>
            </div >
            <hr />
            <div className={styles.navContent}>
                <li className={styles.navItem}>
                    <a href="#">
                        < i className="fa-light fa-house"></i>
                        < span > Home</span >
                    </a >
                </li >

                <li className={styles.navItem}>
                    < Link to="/ciclo" >
                        <i className="fa-light fa-clipboard"></i>
                        < span > Ciclo</span >
                    </Link >
                </li >
                <li className={styles.navItem}>
                    < Link to="/registro" >
                        <i className="styles.fa-light fa-clock-rotate-left" />
                        < span > Registros</span >
                    </Link >
                </li >

                <li className={styles.navItem}>
                    <a href="#" >
                        <i className="fa-light fa-chart-line"></i>
                        <span> Desempenho</span>
                    </a>
                </li>

                <li className={styles.navItem}>
                    <a href="#" >
                        <i className="fa-light fa-gear"></i>
                        <span> Configurações</span >
                    </a>
                </li>
            </div>

            <div className={styles.navFooter}>
                < div className={styles.navFooterHead}>
                    <div className={styles.navFooterAvatar}>
                        <img src="https://cdn-icons-png.flaticon.com/512/3242/3242257.png" alt="" />
                    </div >
                    <div className={styles.navFooterUser}>
                        <strong> 'Usuário nick'</strong>
                    </div>
                </div >
            </div >
        </nav >
    );
};