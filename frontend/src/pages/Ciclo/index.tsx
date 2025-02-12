
import { useEffect, useState } from "react";
import "./styles.css";
import { CicloGraph } from "../../components/CicloGraph";
import { SideBar } from "../../components/SideBar";
import { CicloTable } from "../../components/CicloTable";

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
            <div className="container" >
                <div className="d-flex justify-content-center">
                    <div className="ciclo-title">
                        <h1>Ciclo: { }</h1>
                    </div>
                </div>

                <div className="d-flex justify-content-center">
                    <div className="ciclo-stats">
                        <div className="ciclo-graph">
                            <div className="ciclo-graph-box">
                                <h2>Horas registradas</h2>
                                <div className="ciclo-graph-data">
                                    <CicloGraph />
                                </div>
                            </div>
                        </div>
                        <div className="ciclo-cards">
                            <div className="card">
                                <div className="card-body">
                                    <div className="card-title">
                                        <span>Sequência atingida</span>
                                        <i className="fa-duotone fa-light fa-circle-info"></i>
                                    </div>
                                    <div className="d-flex card-subtitle">
                                        <div className="card-icon">
                                            <i className="fa-thin fa-mug-hot"></i>
                                        </div>
                                        <p className="card-text">2 dias</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <div className="card-title">
                                        <span className="card-title">Foco x Produtividade</span>
                                        <i className="fa-duotone fa-light fa-circle-info"></i>
                                    </div>
                                    <div className="d-flex card-foco-prod">
                                        <div className="d-flex card-subtitle">
                                            <div className="card-icon">
                                                <i className="fa-sharp fa-light fa-eye-slash"></i>
                                            </div>
                                            <p className="card-text">4</p>
                                        </div>
                                        <div className="d-flex card-subtitle">
                                            <div className="card-icon">
                                                <i className="fa-sharp fa-light fa-brain"></i>
                                            </div>
                                            <p className="card-text">3.87</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <div className="card-title">
                                        <span className="card-title">Líquido do dia</span>
                                        <i className="fa-duotone fa-light fa-circle-info"></i>
                                    </div>
                                    <div className="d-flex card-subtitle">
                                        <div className="card-icon">
                                            <i className="fa-thin fa-watch"></i>
                                        </div>
                                        <p className="card-text">4:12:00</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <hr />

                <CicloTable />
            </div>

        </>
    )
};