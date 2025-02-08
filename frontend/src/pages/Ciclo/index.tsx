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
                    <div className="graph">stats</div>
                    <div>
                        <div>sequencia</div>
                        <div>horas liquidas</div>
                    </div>
                </div>
            </div>

            <div className="table-responsive">
                <table className="table table-striped">
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
                        <td>-------- 60%</td>
                        <td>🤢😺😻😨</td>
                    </tbody>
                </table>
            </div>
        </div>
    )
};