import styles from './styles.module.css';


export const Plano = () => {
    return (
        <div>
            <h1>PlanoConfig</h1>

            <div className={styles.container}>

                <div className={styles["cards-group"]}>
                    <div className={styles["subject-card"]}>
                        <div className={styles["subject-header"]}>Física</div>
                        <div className={styles["sessions-container"]}>
                            <div className={styles["session-card"]}>1h</div>
                            <div className={styles["session-card"]}>1h 20min</div>
                            <div className={styles["session-card"]}>1h 20min</div>
                        </div>
                    </div>

                    <div className={styles["subject-card"]}>
                        <div className={styles["subject-header"]}>Matemática</div>
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
                </div>

            </div>

        </div>
    )
}

export default Plano;