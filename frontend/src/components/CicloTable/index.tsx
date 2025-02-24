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
        <div className={styles["table-responsive ciclo-table"]}> {/* Use styles */}
            <table className={styles.table}> {/* Use styles */}
                <thead>
                    <tr>
                        <th className={styles.th} style={{ width: '10%' }}>Iniciar</th> {/* Use styles para th */}
                        <th scope="col" className={styles.th} style={{ width: '20%' }}>Matéria</th>
                        <th scope="col" className={styles.th} style={{ width: '25%' }}>Horas feitas</th>
                        <th scope="col" className={styles.th} style={{ width: '30%' }}>Progresso</th>
                        <th scope="col" className={styles.th} style={{ width: '10%' }}>Tags</th>
                    </tr>
                </thead>

                <tbody>
                    {dadosTabela.map((item) => (
                        <tr key={item.id} className={styles.tr}> {/* Use styles para tr */}
                            <td className={styles.td}> {/* Use styles para td */}
                                <button onClick={() => openModal(item.id)} className={styles.button}> {/* Use styles para button */}
                                    <i className="fa-solid fa-play" />
                                </button>
                            </td>
                            <td className={styles.td}>{item.materia}</td>
                            <td className={styles.td}>{item.horasRealizadas}/{item.horasMeta}</td>
                            <td className={styles.td}>
                                <h5 className={styles.progressPercentage}>{(item.progresso * 100).toPrecision(2)}%</h5> {/* Use styles para a porcentagem */}
                                <progress value={item.progresso} max={1} className={`${styles.progress} ${getProgressClass(item.progresso)}`} /> {/* Use styles para a barra de progresso */}
                            </td>
                            <td className={styles.td}>{item.tags}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {isModalOpen && (
                <div className={`${styles["ciclo-register"]} ${styles.modalcard}`}> {/* Use styles para as classes do modal */}
                    <h3 className={styles.modalTitle}>Como deseja registrar o tempo?</h3> {/* Use styles para o título do modal */}
                    <div className={styles["modal-options"]}>
                        <button onClick={handleRegisterOption("manual")} className={styles.modalButton}>Manualmente</button> {/* Use styles para os botões do modal */}
                        <button onClick={handleRegisterOption("stopwatch")} className={styles.modalButton}>Cronometrar</button>
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