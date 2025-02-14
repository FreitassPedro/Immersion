import { useState } from "react";
import { cicloTableItems } from "../../data/cicloTableItem";
import { CicloRegister } from "../CicloRegister";

import { NovoRegistro } from "./cicloItem";

const timeStringToMinutes = (time: string): number => {
    const [hh, mm, ss] = time.split(":").map(Number);
    return hh * 60 + mm + ss / 60; // Converte para minutos
};

export const CicloTable = () => {

    const [isCicloRegister, setIsCicloRegister] = useState(false);
    const [dadosTabela, setDadosTabela] = useState(cicloTableItems);

    const openCicloRegister = () => {
        setIsCicloRegister(true);
    };

    const closeCicloRegister = () => {
        setIsCicloRegister(false);
    };

    const updateItemTabela = (novoRegistro: NovoRegistro) => {
        const item = dadosTabela.find((item) => item.id === novoRegistro.id);
        if (!item) return;
        
        const horasRealizadas = timeStringToMinutes(item.horasRealizadas) + timeStringToMinutes(novoRegistro.horasFeitas);
        const progresso = horasRealizadas / timeStringToMinutes(item.horasMeta);
       
        const itemAtualizado = {
            ...item,
            horasRealizadas: horasRealizadas.toString(),
            progresso: progresso
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
                            <td><button onClick={openCicloRegister}><i className="fa-solid fa-play" /></button> </td>
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
                onItemAdd={updateItemTabela}
                />
            )}
        </div>

    );
}

export default CicloTable;