import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { CicloGraph } from "../../components/CicloGraph";
import { SideBar } from "../../components/SideBar";
import { CicloTable } from "../../components/CicloTable";
import { Link } from "react-router-dom";

export const Ciclo = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => (prev >= 1 ? 1 : prev + 0.1));
        }, 500);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <SideBar />
            <div className={styles.container}> {/* Use styles.container */}
                <div className={styles["d-flex justify-content-center"]}> {/* Use styles com bracket notation */}
                    <div className={styles["ciclo-title"]}> {/* Use styles.ciclo-title */}
                        <h1>Ciclo: { }</h1>
                    </div>
                </div>

                <div className={styles["justify-content-center"]}>
                    <div className={styles["ciclo-stats"]}>
                        <div className={styles["ciclo-graph"]}>
                            <div className={styles["ciclo-graph-box"]}>
                                <h2>Horas registradas por matéria</h2>
                                <div className={styles["ciclo-graph-data"]}>
                                    <CicloGraph />
                                </div>
                            </div>
                        </div>
                        <div className={styles["ciclo-cards"]}>
                            <div className={styles.card}> {/* Use styles.card */}
                                <div className={styles["card-body"]}>
                                    <div className={styles["card-title"]}>
                                        <span>Sequência atingida</span>
                                        <i className="fa-duotone fa-light fa-circle-info"></i>
                                    </div>
                                    <div className={styles["card-subtitle"]}>
                                        <div className={styles["card-icon"]}>
                                            <i className="fa-thin fa-mug-hot"></i>
                                        </div>
                                        <p className={styles["card-text"]}>2 dias</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.card}>
                                <div className={styles["card-body"]}>
                                    <div className={styles["card-title"]}>
                                        <span>Foco x Produtividade</span>
                                        <i className="fa-duotone fa-light fa-circle-info"></i>
                                    </div>
                                    <div className={styles["card-foco-prod"]}>
                                        <div className={styles["card-subtitle"]}>
                                            <div className={styles["card-icon"]}>
                                                <i className="fa-sharp fa-light fa-eye-slash"></i>
                                            </div>
                                            <p className={styles["card-text"]}>4</p>
                                        </div>
                                        <div className={styles["card-subtitle"]}>
                                            <div className={styles["card-icon"]}>
                                                <i className="fa-sharp fa-light fa-brain"></i>
                                            </div>
                                            <p className={styles["card-text"]}>3.87</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.card}>
                                <div className={styles["card-body"]}>
                                    <div className={styles["card-title"]}>
                                        <span>Líquido do dia</span>
                                        <i className="fa-duotone fa-light fa-circle-info"></i>
                                    </div>
                                    <div className={styles["card-subtitle"]}>
                                        <div className={styles["card-icon"]}>
                                            <i className="fa-thin fa-watch"></i>
                                        </div>
                                        <p className={styles["card-text"]}>4:12:00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className={styles.hr} /> {/* Adicione estilos para a linha hr, se necessário */}
                <CicloTable />

                <div className={styles["d-flex justify-content-center"]}>
                    <Link to="/plano">
                        <div className={"btn btn-primary"}>
                            <i className="fa-duotone fa-light fa-plus" />
                            <span>Ajustes</span>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
};