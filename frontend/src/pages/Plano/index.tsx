import { PlanoGraph } from '../../components/PlanoGraph';
import styles from './styles.module.css';


export const Plano = () => {
    return (
        <div>
            <h1>PlanoConfig</h1>
            <PlanoGraph />
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