import { useCallback, useEffect, useState } from "react";
import { cicloTableItems } from "../../data/cicloTableItem";
import { CicloTableItem } from "../../data/cicloTableItem";
import { CicloRegister } from "../CicloRegister";
import { CicloStopwatch } from "../CicloStopwatch";
import { NovoRegistro } from "../CicloRegister/novoRegistro";

const timeStringToSeconds = (time: string): number => {
    const [hh, mm, ss] = time.split(":").map(Number);
    return hh * 3600 + mm * 60 + ss;
};

const timeSecondsToString = (time: number) => {
    const hh = Math.floor(time / 3600);
    const mm = Math.floor((time % 3600) / 60);
    const ss = time % 60;
    return `${String(hh).padStart(2, "0")}:${String(mm).padStart(2, "0")}:${String(ss).padStart(2, "0")}`;
}

export const CicloTable = () => {
    const [dadosTabela, setDadosTabela] = useState(cicloTableItems);
    const [currentItem, setCurrentItem] = useState<CicloTableItem | null>(null);

    const [stopwatchTime, setStopwatchTime] = useState<number>(0);
    const [step, setStep] = useState<'select' | 'stopwatch' | 'register' | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isStopwatchOpen, setIsStopwatchOpen] = useState(false);
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);

    const openModal = (id: number) => {
        const item = dadosTabela.find((item) => item.id === id);
        setCurrentItem(item!);
        setStep("select");
        console.log("Modal aberto", id);
    };

    // callBack foi usado pois nao ha necessidade de recriar a funcao a cada renderizacao se ela nao mudar
    const handleRegisterOption = useCallback(
        (option: "manual" | "stopwatch") => () => {
            setStep(option === 'manual' ? 'register' : 'stopwatch');
            setIsModalOpen(false);
        }
        , []
    );

    const handleSaveRegistro = useCallback((novoRegistro: NovoRegistro) => {
        setDadosTabela((prevDados) =>
            prevDados.map((item) =>
                item.id === novoRegistro.id
                    ? {
                        ...item,
                        horasRealizadas: timeSecondsToString(
                            timeStringToSeconds(item.horasRealizadas) + parseInt(novoRegistro.horasFeitas)
                        ),
                        progresso:
                            (timeStringToSeconds(item.horasRealizadas) + parseInt(novoRegistro.horasFeitas)) /
                            timeStringToSeconds(item.horasMeta),
                    }
                    : item
            )
        );
    }, []);

    useEffect(() => {
        switch (step) {
            case "select":
                setIsModalOpen(true);
                setIsStopwatchOpen(false);
                setIsRegisterOpen(false);
                break;
            case "stopwatch":
                setIsModalOpen(false);
                setIsStopwatchOpen(true);
                setIsRegisterOpen(false);
                break;
            case "register":
                setIsModalOpen(false);
                setIsStopwatchOpen(false);
                setIsRegisterOpen(true);
                break;
        }
    }, [step]);

    useEffect(() => {
        console.log("Opção selecionada", step);
    }, [step]);

    const getProgressClass = (progresso: number) => {
        if (progresso < 0.3) return "pgbar-low";
        if (progresso < 0.7) return "pgbar-medium";
        if (progresso < 1) return "pgbar-high";
        return "pgbar-completed";
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
                        <tr key={item.id} >
                            <td>
                                <button onClick={() => openModal(item.id)}>
                                    <i className="fa-solid fa-play" /></button>
                            </td>
                            <td>{item.materia}</td>
                            <td>{item.horasRealizadas}/{item.horasMeta}</td>
                            <td>
                                <h5>{(item.progresso * 100).toPrecision(2)}%</h5>
                                <progress value={item.progresso} max={1} className={getProgressClass(item.progresso)} /></td>
                            <td>{item.tags}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {isModalOpen && (
                <div className="ciclo-register">
                    <h3>Como deseja registrar o tempo?</h3>
                    <button onClick={handleRegisterOption("manual")}>Manualmente</button>
                    <button onClick={handleRegisterOption("stopwatch")}>Cronometrar</button>
                </div>
            )}

            {isRegisterOpen && currentItem && (
                <CicloRegister
                    isOpen={isRegisterOpen}
                    onClose={() => setIsRegisterOpen(false)}
                    onSave={handleSaveRegistro}
                    itemId={currentItem.id}
                    secondsDone={stopwatchTime}
                />
            )}

            {isStopwatchOpen && currentItem && (
                <CicloStopwatch
                    materia={currentItem.materia}
                    horasMeta={timeSecondsToString(timeStringToSeconds(currentItem.horasMeta))}
                    onFinish={(time) => {
                        setStopwatchTime(time);
                        setStep("register");
                    }}
                />
            )}
        </div>
    );
}

export default CicloTable;