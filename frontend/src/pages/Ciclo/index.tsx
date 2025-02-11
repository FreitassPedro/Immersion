
import { useEffect, useState } from "react";
import "./styles.css";
import { CicloGraph } from "../../components/CicloGraph";

export const Ciclo = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => (prev >= 1 ? 1 : prev + 0.1));
        }, 500);
        return () => clearInterval(interval);
    }, []);


    return (
        <div className="container-xxl" >
            <div className="d-flex justify-content-center">
                <div className="ciclo-box">
                    <h1>Ciclo: { }</h1>
                </div>
            </div>

            <div className="d-flex justify-content-center">
                <div className="ciclo-stats">
                    <div className="ciclo-graph">
                        <CicloGraph />
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

            <div className="table-responsive ciclo-table">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Matéria</th>
                            <th scope="col">Horas feitas</th>
                            <th scope="col">Progresso</th>
                            <th scope="col">Tags</th>
                        </tr>
                    </thead>

                    <tbody>
                        <td>Matemática</td>
                        <td>1:30:00</td>
                        <td><progress value={0.4} max={1} /></td>
                        <td>🤢😺😻😨</td>
                    </tbody>
                    <tbody>
                        <td>Inglês</td>
                        <td>2:20:00</td>
                        <td><progress value={0.6} max={1} /></td>
                        <td>🤢😺😻😨</td>
                    </tbody>
                </table>
            </div>
        </div>
    )
};