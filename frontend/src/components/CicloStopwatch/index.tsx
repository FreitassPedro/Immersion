
import { useCallback, useMemo, useState } from "react";
import { Icon } from "./Icon";

import styles from './styles.module.css';
import sound from '../../assets/sounds/big-ben.wav';

interface CicloStopwatchProps {
    materia: string;
    horasMeta: string;
    onFinish: (tempo: number) => void;
}

const timeSecondsToString = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secondsLast = seconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secondsLast).padStart(2, '0')}`;
};

const timeStringToSeconds = (time: string): number => {
    const [hh, mm, ss] = time.split(":").map(Number);
    return hh * 3600 + mm * 60 + ss; // Converte para minutos
};

export const CicloStopwatch: React.FC<CicloStopwatchProps> = ({ materia, horasMeta, onFinish }) => {
    const [timerSeconds, setTimerSeconds] = useState<number>(0);
    const [pauseSeconds, setPauseSeconds] = useState<number>(0);
    const [timer, setTimer] = useState<any>();
    const [pauseTimer, setPauseTimer] = useState<any>(); // estado para armazenar o ID do intervalo de pausa
    const [stage, setStage] = useState('ready');

    const [isModalOpen, setIsModalOpen] = useState(false);

    // UseMemo executa a função apenas quando o valor de stage é alterado
    const handleStageStatus = useMemo(() => {
        switch (stage) {
            case 'in_progress':
                return 'Foco total! 🔥';
            case 'break':
                return 'Intervalo';
            case 'pause':
                return 'Pausado';
            case 'done':
                return 'Concluído';
            default:
                return 'Pronto para iniciar';
        }
    }, [stage]);

    const startTimer = () => {
        setStage('in_progress');
        clearInterval(pauseTimer);
        setPauseTimer(undefined);
        const timeInterval = setInterval(() => {
            setTimerSeconds((previousSeconds) => {
                if (previousSeconds === timeStringToSeconds(horasMeta)) {
                    const audio = new Audio(sound);
                    audio.play();
                    setStage('done');
                }

                return previousSeconds + 1;
            });
        }, 1000);

        setTimer(timeInterval);
    };


    // useCallback executa a função apenas quando o valor de stage é alterado
    const handlePauseButton = useCallback(() => {
        clearInterval(timer);
        setTimer(undefined);
        setStage('pause');
        handleStartPause();
    }, [timer]);

    const handleStartPause = () => {
        const pauseTime = setInterval(() => {
            setPauseSeconds((previousSeconds) => previousSeconds + 1);

        }, 1000);

        setPauseTimer(pauseTime);
    };

    const handleStopButton = () => {
        clearInterval(timer);
        clearInterval(pauseTimer);
        setTimer(undefined);
        setPauseTimer(undefined);
        setIsModalOpen(true);
        onFinish(timerSeconds);
    };

    const handleDoneButton = () => {
        return 0;
    }


    const handleStageButtons = useMemo(() => {
        switch (stage) {
            case 'pause':
                return (
                    <div className={styles.buttons}>
                        <button onClick={startTimer} className={styles.button}>
                            <Icon variant={"play"} />
                        </button>
                        <button onClick={handleStopButton} className={styles.button}>
                            <i className="fa-solid fa-flag-checkered" />
                        </button>
                    </div>
                );
            case 'in_progress':
                return (
                    <div className={styles.buttons}>
                        <button onClick={handlePauseButton} className={styles.button}>
                            <i className="fa-solid fa-pause" />
                        </button>
                        <button onClick={handleStopButton} className={styles.button} >
                            <i className="fa-solid fa-stop" />
                        </button>
                    </div>
                );
            case 'done':
                return (
                    <div className={styles.buttons}>
                        <button onClick={handlePauseButton} className={styles.button}>
                            <i className="fa-solid fa-pause" />
                        </button>
                        <button onClick={handleStopButton} className={styles.button} >
                            <i className="fa-solid fa-stop" />
                        </button>
                    </div>
                )
            default:
                return (
                    <div className={styles.buttons}>
                        <button onClick={startTimer} className={styles.button}>
                            <span>Iniciar</span>
                        </button>
                    </div>
                );
        };
    }, [handlePauseButton, stage]);

    const handleClose = () => {
        setStage('pause');
        setIsModalOpen(false);
    }

    const handleModalMessage = () => {
        if (timerSeconds >= timeStringToSeconds(horasMeta)) {
            return <p>Parabéns! Você atingiu a meta de tempo. Descanse um pouco e hidrate-se.</p>
        } else {
            return <p>Não pare agora, ainda resta {timeSecondsToString(timeStringToSeconds(horasMeta) - timerSeconds)}, falta pouco!</p>
        }
    
     };

    return (
        <>
            <div className={styles.container}>
                <div className={styles.painel}>
                    <div className={styles.content}>
                        <h1 className={styles.title}>Sessão {materia}</h1>
                        <span>Sua meta de tempo nessa sessão é {horasMeta} (HH:MM:SS).
                            Quando atingir a meta, o sino será tocado. Bons estudos!
                        </span>
                        <div className={styles.modeContainer}>
                            <h2>Intervalo:</h2>
                            <div className={styles.modeButtons}>
                                <button className={styles.button}>No break</button>
                                <button className={styles.button}>Short break</button>
                                <button className={styles.button}>Long break</button>
                            </div>
                        </div>
                        <span className={styles.h1}>{handleStageStatus}</span>

                        <div className={styles.timer}>
                            <h1>{timeSecondsToString(timerSeconds)}</h1>
                            <h4>Pause: {timeSecondsToString(pauseSeconds)}</h4>
                        </div>

                        {handleStageButtons}
                    </div>
                </div>
            </div >

            {
                isModalOpen && (
                    <div style={{ display: 'flex', flexDirection: 'column',alignItems: 'center', zIndex: 1000, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px', borderRadius: '10px' }}>
                        <h3>Deseja parar?</h3>
                        <p>Até o momento, você estudou por {timeSecondsToString(timerSeconds)}.</p>
                        {handleModalMessage()}
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <button >Sim</button>
                            <button onClick={handleClose}>Não</button>
                        </div>
                    </div>
                )
            }
        </>
    )
};