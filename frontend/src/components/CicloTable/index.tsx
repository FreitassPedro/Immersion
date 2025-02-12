
export const CicloTable = () => {

    return (
        <div className="table-responsive ciclo-table">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>.</th>
                                <th scope="col">Matéria</th>
                                <th scope="col">Horas feitas</th>
                                <th scope="col">Progresso</th>
                                <th scope="col">Tags</th>
                            </tr>
                        </thead>

                        <tbody>
                            <td><i className="fa-solid fa-play" /></td>
                            <td>Matemática</td>
                            <td>1:30:00</td>
                            <td><progress value={0.4} max={1} /></td>
                            <td>🤢😺😻😨</td>
                        </tbody>
                        <tbody>
                            <td><i className="fa-solid fa-play" /></td>
                            <td>Inglês</td>
                            <td>2:20:00</td>
                            <td><progress value={0.6} max={1} /></td>
                            <td>🤢😺😻😨</td>
                        </tbody>
                        <tbody>
                            <td><i className="fa-solid fa-play" /></td>
                            <td>Inglês</td>
                            <td>2:20:00</td>
                            <td><progress value={0.6} max={1} /></td>
                            <td>🤢😺😻😨</td>
                        </tbody>
                        <tbody>
                            <td><i className="fa-solid fa-play" /></td>
                            <td>Inglês</td>
                            <td>2:20:00</td>
                            <td><progress value={0.6} max={1} /></td>
                            <td>🤢😺😻😨</td>
                        </tbody>
                        <tbody>
                            <td><i className="fa-solid fa-play" /></td>
                            <td>Inglês</td>
                            <td>2:20:00</td>
                            <td><progress value={0.6} max={1} /></td>
                            <td>🤢😺😻😨</td>
                        </tbody>
                        <tbody>
                            <td><i className="fa-solid fa-play" /></td>
                            <td>Inglês</td>
                            <td>2:20:00</td>
                            <td><progress value={0.6} max={1} /></td>
                            <td>🤢😺😻😨</td>
                        </tbody>
                    </table>
                </div>
    );
}