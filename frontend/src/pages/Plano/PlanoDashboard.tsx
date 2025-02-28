
import styles from './styles.module.css';


export const PlanoDashboard = () => {
    return (
        <div className={styles["dashboard-card"]}>
            <div className={styles["dashboard-header"]}>
                <div className={styles.icon}>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="2" />
                        <path d="M12 7V12L15 15" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </div>
                <div className={styles["dashboard-title"]}>
                    <h2 className={styles.h2}>24h</h2>
                    <p className={styles.p}>Horas Totais de Estudo</p>
                </div>
            </div>
            <div className={styles["dashboard-content"]}>
                <div className={styles["feature-list"]}>
                    <ul className={styles.ul}>
                        <li className={styles.li}>Criar sessões de estudo personalizadas</li>
                        <li className={styles.li}>Monitorar seu progresso diário</li>
                        <li className={styles.li}>Manter o foco durante os períodos de estudo</li>
                        <li className={styles.li}>Estabelecer metas de aprendizado</li>
                    </ul>
                </div>
            </div>
            <div className={styles["dashboard-footer"]}>
                Configure suas sessões de estudo e mantenha-se focado para alcançar seus objetivos de aprendizado de forma eficiente.
            </div>
        </div>
    )
}

