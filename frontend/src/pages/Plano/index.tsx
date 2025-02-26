import { PlanoGraph } from '../../components/PlanoGraph';
import styles from './styles.module.css';


export const Plano = () => {
    return (
        <div>
            <h1>PlanoConfig</h1>
            <div className={styles["graph-container"]}>
                <PlanoGraph />
                <div className={styles["card"]}>
                    {/* Design da parte superior */}
                    <div className={styles["header-container"]}>
                        <div className={styles["header-gradient"]}>
                            <div className={styles["content-wrapper"]}>
                                <div className={styles["icon-container"]}>
                                    <svg
                                        className={styles["clock-icon"]}
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="32"
                                        height="32"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <polyline points="12 6 12 12 16 14"></polyline>
                                    </svg>
                                </div>
                                <div className={styles["time-container"]}>
                                    <h2 className={styles["hours-text"]}>24h</h2>
                                    <p className={styles["subtitle-text"]}>Horas Totais de Estudo</p>
                                </div>
                            </div>
                        </div>
                        {/* Detalhe decorativo */}
                        <div className={styles["wave-decoration"]}></div>
                    </div>

                    {/* Conteúdo */}
                    <div className={styles["content-section"]}>
                        <div className={styles["info-box"]}>
                            <p className={styles["info-title"]}>
                                Este gerenciador de estudo ajuda você a:
                            </p>
                            <ul className={styles["feature-list"]}>
                                <li>Criar sessões de estudo personalizadas</li>
                                <li>Monitorar seu progresso diário</li>
                                <li>Manter o foco durante os períodos de estudo</li>
                                <li>Estabelecer metas de aprendizado</li>
                            </ul>
                        </div>

                        <div className={styles["footer-section"]}>
                            <p className={styles["footer-text"]}>
                                Configure suas sessões de estudo e mantenha-se focado para alcançar seus objetivos de aprendizado de forma eficiente.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            <div className={styles.container}>

                <div className={styles["cards-group"]}>
                    <div className={styles["subject-card"]}>
                        <div className={styles["subject-header"]}>
                            <h2>Física</h2>
                            <div className={styles["subject-header-hour"]}>
                                <i className="fa-light fa-clock" />
                                <span>02:30</span>
                            </div>
                        </div>
                        <div className={styles["sessions-container"]}>
                            <div className={styles["session-card"]}>1h</div>
                            <div className={styles["session-card"]}>1h 20min</div>
                            <div className={styles["session-card"]}>1h 20min</div>
                        </div>
                    </div>

                    <div className={styles["subject-card"]}>
                        <div className={styles["subject-header"]}>
                            <h2>Matemática</h2>
                            <div className={styles["subject-header-hour"]}>
                                <i className="fa-light fa-clock" />
                                <span>02:30</span>
                            </div>
                        </div>
                        <div className={styles["sessions-container"]}>
                            <div className={styles["session-card"]}>1h</div>
                            <div className={styles["session-card"]}>1h 20min</div>
                            <div className={styles["session-card"]}>1h 20min</div>
                            <div className={styles["session-card"]}>1h 20min</div>
                            <div className={styles["session-card"]}>1h 20min</div>
                            <div className={styles["session-card"]}>1h 20min</div>
                            <div className={styles["session-card"]}>1h 20min</div>
                        </div>
                    </div>

                    <div className={styles["subject-card"]}>
                        <div className={styles["subject-header"]}>
                            <h2>Quimica</h2>
                            <div className={styles["subject-header-hour"]}>
                                <i className="fa-light fa-clock" />
                                <span>02:30</span>
                            </div>
                        </div>
                        <div className={styles["sessions-container"]}>
                            <div className={styles["session-card"]}>1h</div>
                            <div className={styles["session-card"]}>1h 20min</div>
                            <div className={styles["session-card"]}>1h 20min</div>
                        </div>
                    </div>

                    <div className={styles["subject-card"]}>
                        <div className={styles["subject-header"]}>
                            <h2>Biologia</h2>
                            <div className={styles["subject-header-hour"]}>
                                <i className="fa-light fa-clock" />
                                <span>02:30</span>
                            </div>
                        </div>
                        <div className={styles["sessions-container"]}>
                            <div className={styles["session-card"]}>1h</div>
                            <div className={styles["session-card"]}>1h 20min</div>
                            <div className={styles["session-card"]}>1h 20min</div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Plano;