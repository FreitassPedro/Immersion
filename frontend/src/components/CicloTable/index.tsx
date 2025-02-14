import { useState } from "react";
import { cicloTableItems } from "../../data/cicloTableItem";
import { CicloRegister } from "../CicloRegister";

import { NovoRegistro } from "./cicloItem";

const timeStringToSeconds = (time: string): number => {
    const [hh, mm, ss] = time.split(":").map(Number);
    return hh * 3600 + mm * 60 + ss; // Converte para minutos
};

const timeSecondsToString = (time: number) => {
    const hh = Math.floor(time / 3600);
    const mm = Math.floor((time % 3600) / 60);
    const ss = time % 60;
    return `${String(hh).padStart(2, "0")}:${String(mm).padStart(2, "0")}:${String(ss).padStart(2, "0")}`;
}

export const CicloTable = () => {

    const [isCicloRegister, setIsCicloRegister] = useState(false);
    const [dadosTabela, setDadosTabela] = useState(cicloTableItems);
    const [currentItemId, setCurrentItemId] = useState<number | null>(null);

    const openCicloRegister = (id: number) => {
        setCurrentItemId(id);
        setIsCicloRegister(true);
    };

    const closeCicloRegister = () => {
        setIsCicloRegister(false);
    };

    const updateItemTabela = (novoRegistro: NovoRegistro) => {

        const item = dadosTabela.find((item) => item.id === novoRegistro.id);
        if (!item) return console.error("Item não encontrado");

        const horasTotalEmSegundos = timeStringToSeconds(item.horasRealizadas) + parseInt(novoRegistro.horasFeitas);
        
        const itemAtualizado = {
            ...item,
            horasRealizadas: timeSecondsToString(horasTotalEmSegundos),
            progresso: horasTotalEmSegundos / timeStringToSeconds(item.horasMeta)
        };

        const novaTabelaAtualizada = [
            ...dadosTabela.slice(0, dadosTabela.indexOf(item)),
            itemAtualizado,
            ...dadosTabela.slice(dadosTabela.indexOf(item) + 1)
        ];

        setDadosTabela(novaTabelaAtualizada);
    }


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
                            <td>
                                <button onClick={() => openCicloRegister(item.id)}>
                                <i className="fa-solid fa-play" /></button>
                            </td>
                            <td>{item.materia}</td>
                            <td>{item.horasRealizadas}/{item.horasMeta}</td>
                            <td><progress value={item.progresso} max={1} /></td>
                            <td>{item.tags}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {isCicloRegister && (
                <CicloRegister isOpen={isCicloRegister}
                    onClose={closeCicloRegister}
                    updateItemTabela={updateItemTabela}
                    itemId={currentItemId!}
                />
            )}
        </div>

    );
}

export default CicloTable;