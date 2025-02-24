import styles from "../../pages/Ciclo/styles.module.css";
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

    const handleRegisterOption = useCallback(
        (option: "manual" | "stopwatch") => () => {
            setStep(option === 'manual' ? 'register' : 'stopwatch');
            setIsModalOpen(false);
        }
        , []
    );

    const handleSaveRegistro = useCallback((novoRegistro: NovoRegistro) => {
        setDadosTabela((prevDados) =>
            prevDados.map((item) => {
                if (item.id !== novoRegistro.id) return item;
                const secondsItemHorasRealizadas = timeStringToSeconds(item.horasRealizadas);
                const secondsRegistroHorasFeitas = timeStringToSeconds(novoRegistro.horasFeitas);

                const horasAtualizadas = secondsItemHorasRealizadas + secondsRegistroHorasFeitas;
                const progressoAtualizado = (horasAtualizadas / timeStringToSeconds(item.horasMeta));
                const horasAtualizadasFormatadas = timeSecondsToString(horasAtualizadas);

                return {
                    ...item,
                    horasRealizadas: horasAtualizadasFormatadas,
                    progresso:
                        progressoAtualizado,
                };

            })
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

    
    const getProgressClass = (progresso: number) => {
        if (progresso < 0.3) return styles.pgbarlow;
        if (progresso < 0.7) return styles.pgbarmedium;
        if (progresso < 1) return styles.pgbarhigh;
        return styles.pgbarcompleted;
    };

    return (
        <div className={styles["table-responsive ciclo-table"]}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th className={styles.th} style={{ width: '10%' }}>Iniciar</th>
                        <th scope="col" className={styles.th} style={{ width: '20%' }}>Matéria</th>
                        <th scope="col" className={styles.th} style={{ width: '25%' }}>Horas feitas</th>
                        <th scope="col" className={styles.th} style={{ width: '30%' }}>Progresso</th>
                        <th scope="col" className={styles.th} style={{ width: '10%' }}>Tags</th>
                    </tr>
                </thead>
                <tbody>
                    {dadosTabela.map((item) => (
                        <tr key={item.id} className={styles.tr}>
                            <td className={styles.td}>
                                <button onClick={() => openModal(item.id)} className={styles.button}>
                                    <i className="fa-solid fa-play" />
                                </button>
                            </td>
                            <td className={styles.td}>{item.materia}</td>
                            <td className={styles.td}>{item.horasRealizadas}/{item.horasMeta}</td>
                            <td className={styles.td}>
                                <h5 className={styles.progressTitle}>{(item.progresso * 100).toFixed(0)}%</h5>
                                <progress value={item.progresso} max={1} className={`${styles.progress} ${getProgressClass(item.progresso)}`} />
                            </td>
                            <td className={styles.td}>{item.tags}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {isModalOpen && (
                <div className={styles.modal}>
                    <div className={styles["modal-content"]}>
                        <h2>Como deseja registrar o tempo?</h2>
                        <div className={styles["modal-options"]}>
                            <button onClick={handleRegisterOption("manual")} className={styles.modalButton}>Manualmente</button>
                            <button onClick={handleRegisterOption("stopwatch")} className={styles.modalButton}>Cronometrar</button>
                        </div>
                    </div>
                </div>
            )}

            {isRegisterOpen && currentItem && (
                <CicloRegister
                    isOpen={isRegisterOpen}
                    onClose={() => setIsRegisterOpen(false)}
                    onSave={handleSaveRegistro}
                    item={currentItem}
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