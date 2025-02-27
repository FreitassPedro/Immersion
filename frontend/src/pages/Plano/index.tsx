import { PlanoGraph } from '../../components/PlanoGraph';
import styles from './styles.module.css';


export const Plano = () => {
    return (
        <div className={styles.container}>
        <header className={styles.header}>
            <h1 className={styles.h1}>PlanoConfig</h1>
            <button className={styles["btn-menu"]}>≡</button>
        </header>
        <div className={styles["dashboard-card"]}>
            <div className={styles["dashboard-header"]}>
                <div className={styles.icon}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="2" />
                        <path d="M12 7V12L15 15" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </div>
                <div className={styles.info}>
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
        <div className={styles["progress-graph"]}>
            <h2 className={styles.h2}>Progresso por Disciplina</h2>
            <div className={styles["progress-bar"]}>
                <div className={styles.bar} style={{ width: '25%' }}></div>
                <span className={styles.label}>Matemática</span>
                <span className={styles.value}>25%</span>
            </div>
            <div className={styles["progress-bar"]}>
                <div className={styles.bar} style={{ width: '45%' }}></div>
                <span className={styles.label}>Química</span>
                <span className={styles.value}>45%</span>
            </div>
            <div className={styles["progress-bar"]}>
                <div className={styles.bar} style={{ width: '55%' }}></div>
                <span className={styles.label}>Biologia</span>
                <span className={styles.value}>55%</span>
            </div>
            <div className={styles["progress-bar"]}>
                <div className={styles.bar} style={{ width: '80%' }}></div>
                <span className={styles.label}>Física</span>
                <span className={styles.value}>80%</span>
            </div>
            <div className={styles["x-axis"]}>
                <span className={styles.span}>0</span>
                <span className={styles.span}>5000</span>
                <span className={styles.span}>10000</span>
                <span className={styles.span}>15000</span>
                <span className={styles.span}>20000</span>
                <span className={styles.span}>25000</span>
                <span className={styles.span}>30000</span>
            </div>
        </div>
        <h2 className={styles["section-title"]}>Ajuste seu ciclo</h2>
        <table className={styles["study-grid"]}>
            <thead>
                <tr>
                    <th className={styles.th}>Disciplina</th>
                    <th className={styles.th}>Dificuldade</th>
                    <th className={styles.th}>Peso</th>
                    <th className={styles.th}>Quantia conteúdo</th>
                    <th className={styles.th}>Recomendado</th>
                    <th className={styles.th}>Planejado</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className={styles.td}><div className={styles["subject-label"]}>Álgebra Linear</div></td>
                    <td className={styles.td}>2</td>
                    <td className={styles.td}>3</td>
                    <td className={styles.td}>2</td>
                    <td className={styles.td}>x Horas</td>
                    <td className={styles.td}>Horas</td>
                </tr>
                <tr>
                    <td className={styles.td}><div className={styles["subject-label"]}>Matemática</div></td>
                    <td className={styles.td}>3</td>
                    <td className={styles.td}>4</td>
                    <td className={styles.td}>1-5</td>
                    <td className={styles.td}>x Horas</td>
                    <td className={styles.td}>Horas</td>
                </tr>
            </tbody>
        </table>
        <div className={styles["cards-container"]}>
            <div className={styles["study-card"]}>
                <div className={styles["study-card-header"]}>
                    <h3 className={styles.h3}>Física</h3>
                    <div className={styles.time}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                            <path d="M12 7V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                        02:30
                    </div>
                </div>
                <div className={styles["study-card-content"]}>
                    <input type="text" className={styles["time-input"]} defaultValue="1h" />
                </div>
            </div>
            <div className={styles["study-card"]}>
                <div className={styles["study-card-header"]}>
                    <h3 className={styles.h3}>Matemática</h3>
                    <div className={styles.time}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                            <path d="M12 7V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                        02:30
                    </div>
                </div>
                <div className={styles["study-card-content"]}>
                    <input type="text" className={styles["time-input"]} defaultValue="1h" />
                    <div className={styles["time-footer"]}>1h 20min</div>
                </div>
            </div>
            <div className={styles["study-card"]}>
                <div className={styles["study-card-header"]}>
                    <h3 className={styles.h3}>Química</h3>
                    <div className={styles.time}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                            <path d="M12 7V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                        02:30
                    </div>
                </div>
                <div className={styles["study-card-content"]}>
                    <input type="text" className={styles["time-input"]} defaultValue="1h" />
                </div>
            </div>
        </div>
    </div>
    )
}

export default Plano;