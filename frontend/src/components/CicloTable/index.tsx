
export const CicloTable = () => {

    return (
        <div className="table-responsive ciclo-table">
            <table className="table">
                <thead>
                    <tr>
                        <th style={{ width: '10%' }}>Iniciar</th>
                        <th scope="col" style={{ width: '20%' }}>Matéria</th>
                        <th scope="col" style={{ width: '25%' }}>Horas feitas</th>
                        <th scope="col" style={{ width: '30%' }}>Progresso</th>
                        <th scope="col" style={{ width: '10%' }}>Tags</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td ><i className="fa-solid fa-play" /></td>
                        <td>Matemática</td>
                        <td>1:30:00</td>
                        <td><progress value={0.4} max={1} /></td>
                        <td>🤢😺😻😨</td>
                    </tr>
                    <tr>
                        <td><i className="fa-solid fa-play" /></td>
                        <td>Inglês</td>
                        <td>2:20:00</td>
                        <td><progress value={0.6} max={1} /></td>
                        <td>🤢😺😻😨</td>
                    </tr>
                    <tr>
                        <td><i className="fa-solid fa-play" /></td>
                        <td>Inglês</td>
                        <td>2:20:00</td>
                        <td><progress value={0.6} max={1} /></td>
                        <td>🤢😺😻😨</td>
                    </tr>
                    <tr>
                        <td><i className="fa-solid fa-play" /></td>
                        <td>Inglês</td>
                        <td>2:20:00</td>
                        <td><progress value={0.6} max={1} /></td>
                        <td>🤢😺😻😨</td>
                    </tr>
                    <tr>
                        <td><i className="fa-solid fa-play" /></td>
                        <td>Inglês</td>
                        <td>2:20:00</td>
                        <td><progress value={0.6} max={1} /></td>
                        <td>🤢😺😻😨</td>
                    </tr>
                    <tr>
                        <td><i className="fa-solid fa-play" /></td>
                        <td>Inglês</td>
                        <td>2:20:00</td>
                        <td><progress value={0.6} max={1}/></td>
                        <td>🤢😺😻😨</td>
                    </tr>
                </tbody>
            </table>
        </div>

    );
}