import "./styles.css";

export const Ciclo = () => {
    return (
        <div className="container" >
            <div className="d-flex justify-content-center">
                <div className="ciclo-box">
                    <h1>Ciclo</h1>
                </div>
            </div>

            <div className="d-flex justify-content-center">
                <div className="ciclo-stats">
                    <div className="ciclo-graph">
                        <img src="./src/assets/images/image.png" alt="" />
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
                        <td><progress value={0.6} /></td>
                        <td>🤢😺😻😨</td>
                    </tbody>
                    <tbody>
                        <td>Inglês</td>
                        <td>2:20:00</td>
                        <td><progress value={0.9} /></td>
                        <td>🤢😺😻😨</td>
                    </tbody>
                </table>
            </div>
        </div>
    )
};