import { cicloTableData } from "../../data/cicloTableData";

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
                    {cicloTableData.map((item) => (
                        <tr key={item.id}>
                            <td><i className="fa-solid fa-play" /></td>
                            <td>{item.materia}</td>
                            <td>{item.horasFeitas}/{item.horasTotais}</td>
                            <td><progress value={item.progresso} max={1} /></td>
                            <td>{item.tags}</td>
                        </tr>    
                    ))}
                   
                </tbody>
            </table>
        </div>

    );
}