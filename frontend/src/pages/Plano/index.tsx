import { PlanoGraph } from '../../components/PlanoGraph';
import styles from './styles.module.css';


export const Plano = () => {
    return (
        <div>
            <h1>PlanoConfig</h1>
            <div className={styles["graph-container"]}>
                <PlanoGraph />
                <div className={styles["card"]}>
                    <div className={styles["header-container"]}>
                        <div className={styles["header-gradient"]}>
                            <div className={styles["content-wrapper"]}>
                                <div className={styles["icon-container"]}>
                                    <i className="fa-light fa-clock" />
                                </div>
                                <div className={styles["time-container"]}>
                                    <h2 className={styles["hours-text"]}>24h</h2>
                                    <p className={styles["subtitle-text"]}>Horas Totais de Estudo</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles["wave-decoration"]} />
                    </div>
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
            <div className={styles["modal-container"]}>
                <div className={styles["modal-content"]}>
                    <h2>Ajuste seu ciclo</h2>
                    <div className={styles["modal-box"]}>
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th><div className={styles["tab-th"]}>Dificuldade</div></th>
                                    <th><div className={styles["tab-th"]}>Peso</div></th>
                                    <th><div className={styles["tab-th"]}>Quantia contéudo</div></th>
                                    <th><div className={styles["tab-th"]}>Recomendado</div></th>
                                    <th><div className={styles["tab-th"]}>Planejado</div></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><div className={styles["modal-header"]}>Algebra Linear</div></td>
                                    <td><input className={styles["input-group"]} type="number" placeholder="1-5" /></td>
                                    <td><input className={styles["input-group"]} type="number" placeholder="1-5" /></td>
                                    <td><input className={styles["input-group"]} type="number" placeholder="1-5" /></td>
                                    <td><input className={`${styles["input-group"]} ${styles["input-disabled"]}`} type="number" placeholder="x Horas" disabled /></td>
                                    <td><input className={`${styles["input-group"]} ${styles["input-disabled"]}`} type="number" placeholder="Horas" readOnly /></td>
                                </tr>
                                <tr>
                                    <td><div className={styles["modal-header"]}>Matemática</div></td>
                                    <td><input className={styles["input-group"]} type="number" placeholder="1-5" /></td>
                                    <td><input className={styles["input-group"]} type="number" placeholder="1-5" /></td>
                                    <td><input className={styles["input-group"]} type="number" placeholder="1-5" /></td>
                                    <td><input className={`${styles["input-group"]} ${styles["input-disabled"]}`} type="number" placeholder="x Horas" disabled /></td>
                                    <td><input className={`${styles["input-group"]} ${styles["input-disabled"]}`} type="number" placeholder="Horas" readOnly /></td>
                                </tr>
                            </tbody>
                        </table>
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
                        <div className={styles["sessions-content"]}>
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
                        <div className={styles["sessions-content"]}>
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
                        <div className={styles["sessions-content"]}>
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
                        <div className={styles["sessions-content"]}>
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