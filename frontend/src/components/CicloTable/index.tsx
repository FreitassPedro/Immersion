import { useState } from "react";
import { cicloTableData } from "../../data/cicloTableData";
import { CicloRegister } from "../CicloRegister";

import { NovoRegistro } from "./novoRegistro";

export const CicloTable = () => {

    const [isCicloRegister, setIsCicloRegister] = useState(false);
    const [dadosTabela, setDadosTabela] = useState(cicloTableData);

    const openCicloRegister = () => {
        setIsCicloRegister(true);
    };

    const closeCicloRegister = () => {
        setIsCicloRegister(false);
    };

    const addItemTabela = (novoRegistro: NovoRegistro) => {
        const itemTabela = {
            id: novoRegistro.id,
            materia: novoRegistro.materia,
            horasFeitas: novoRegistro.horasFeitas,
            horasMeta: novoRegistro.horasFeitas,
            progresso: 0,
            tags: novoRegistro.tags,
        }
        setDadosTabela([...dadosTabela, itemTabela]);
    };

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
                    {dadosTabela.map((item) => (
                        <tr key={item.id}>
                            <td><button onClick={openCicloRegister}><i className="fa-solid fa-play" /></button> </td>
                            <td>{item.materia}</td>
                            <td>{item.horasFeitas}/{item.horasMeta}</td>
                            <td><progress value={item.progresso} max={1} /></td>
                            <td>{item.tags}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {isCicloRegister && (
                <CicloRegister isOpen={isCicloRegister} 
                onClose={closeCicloRegister} 
                onItemAdd={addItemTabela}
                />
            )}
        </div>

    );
}

export default CicloTable;