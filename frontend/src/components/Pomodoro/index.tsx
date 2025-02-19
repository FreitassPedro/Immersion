
import { useCallback, useMemo, useState } from "react";
import { Icon } from "./Icon";

import styles from './styles.module.css';
import sound from '../../assets/sounds/big-ben.wav';

const SECONDS_DEFAULT = 0;
const META_DEFAULT = 6;

export const Pomodoro = () => {
    const [materiaName, setMateriaName] = useState('MATERIA');
    const [timerSeconds, setTimerSeconds] = useState(SECONDS_DEFAULT);
    const [pauseSeconds, setPauseSeconds] = useState(0);
    const [timer, setTimer] = useState<any>();
    const [pauseTimer, setPauseTimer] = useState<any>(); // Novo estado para armazenar o ID do intervalo de pausa

    const [meta, setMeta] = useState(META_DEFAULT);

    const [stage, setStage] = useState('ready');


    // UseMemo executa a função apenas quando o valor de stage é alterado
    const handleStageStatus = useMemo(() => {
        switch (stage) {
            case 'in_progress':
                return 'Foco total!';
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
                if (previousSeconds === META_DEFAULT) {
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
        handlePauseButton();
    };

    const handleDoneButton = () => {
        return 0;
    }
    const secondsToTime = (seconds: number): string => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secondsLast = seconds % 60;

        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secondsLast).padStart(2, '0')}`;
    };

    const handleStageButtons = useMemo(() => {
        switch (stage) {
            case 'pause':
                return (
                    <div className={styles.buttons}>
                        <button onClick={startTimer} className={styles.button}>
                            <Icon variant={"play"} />
                        </button>
                        <button className={styles.button}>
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
                        <button className={styles.button} >
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
                        <button className={styles.button} >
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

    return (
        <>
            <div className={styles.container}>
                <h1 className={styles.title}>Sessão {materiaName}</h1>
                <span>Sua meta de tempo nessa sessão é {secondsToTime(meta)} (HH:MM:SS).
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
                    <h1>{secondsToTime(timerSeconds)}</h1>
                    <h4>Pause: {secondsToTime(pauseSeconds)}</h4>
                </div>

                {handleStageButtons}

            </div >
        </>
    )
};