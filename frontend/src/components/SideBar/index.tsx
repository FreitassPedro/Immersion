import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

export const SideBar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav className={`${styles.sidebar} ${isCollapsed ? styles.collapsed : ''}`}>
      <div className={styles.sidebarHeader}>
        <h1 className={styles.sidebarTitle}>Immersion</h1>
        <button 
          className={styles.toggleButton}
          onClick={toggleSidebar}
          aria-label={isCollapsed ? "Expandir sidebar" : "Recolher sidebar"}
        >
          <span>≡</span>
        </button>
      </div>
      
      <div className={styles.divider}></div>
      
      <ul className={styles.menuList}>
        <li className={styles.menuItem}>
          <a href="#" className={styles.menuLink}>
            <i className="fa-light fa-house"></i>
            <span className={styles.menuText}>Home</span>
          </a>
        </li>

        <li className={styles.menuItem}>
          <Link to="/ciclo" className={styles.menuLink}>
            <i className="fa-light fa-clipboard"></i>
            <span className={styles.menuText}>Ciclo</span>
          </Link>
        </li>
        
        <li className={styles.menuItem}>
          <Link to="/registro" className={styles.menuLink}>
            <i className="fa-light fa-clock-rotate-left"></i>
            <span className={styles.menuText}>Registros</span>
          </Link>
        </li>

        <li className={styles.menuItem}>
          <a href="#" className={styles.menuLink}>
            <i className="fa-light fa-chart-line"></i>
            <span className={styles.menuText}>Desempenho</span>
          </a>
        </li>

        <li className={styles.menuItem}>
          <a href="#" className={styles.menuLink}>
            <i className="fa-light fa-gear"></i>
            <span className={styles.menuText}>Configurações</span>
          </a>
        </li>
      </ul>

      <div className={styles.sidebarFooter}>
        <div className={styles.userProfile}>
          <div className={styles.avatarWrapper}>
            <img 
              src="https://cdn-icons-png.flaticon.com/512/3242/3242257.png" 
              alt="Avatar do usuário" 
              className={styles.avatarImage}
            />
          </div>
          <div className={styles.userInfo}>
            <span className={styles.userName}>Usuário</span>
          </div>
        </div>
      </div>
    </nav>
  );
};