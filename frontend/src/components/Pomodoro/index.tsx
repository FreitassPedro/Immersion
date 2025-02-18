
import { useCallback, useMemo, useState } from "react";
import { Icon } from "./Icon";

import styles from './styles.module.css';

const SECONDS_DEFAULT = 0;
const META_DEFAULT = 6;

export const Pomodoro = () => {
    const [materiaName, setMateriaName] = useState('MATERIA');
    const [seconds, setSeconds] = useState(SECONDS_DEFAULT);
    const [pauseSeconds, setPauseSeconds] = useState(0);
    const [timer, setTimer] = useState<any>();
    const [meta, setMeta] = useState(META_DEFAULT);

    const [stage, setStage] = useState('ready');

    const startTimer = () => {
        setStage('in_progress');
        const timeInterval = setInterval(() => {
            setSeconds((previousSeconds) => {
                if (previousSeconds === META_DEFAULT) {
                    clearInterval(timeInterval);
                    setTimer(undefined);
                    setStage('done');
                    return 0;
                }

                return previousSeconds + 1;
            });
        }, 1000);

        setTimer(timeInterval);
    };

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

    // useCallback executa a função apenas quando o valor de stage é alterado
    const handlePauseButton = useCallback(() => {
        clearInterval(timer);
        setTimer(undefined);
        setStage('pause');
        handleStartPause();
    }, [timer]);

    const handleStopButton = useCallback(() => {
        handlePauseButton();
        setSeconds(SECONDS_DEFAULT);
        setStage('ready');

    }, [handlePauseButton]);

    const handleStartPause = () => {
        const pauseTime = setInterval(() => {
            setPauseSeconds((previousSeconds) => previousSeconds + 1);

        }, 1000);

        setPauseSeconds(pauseTime);
    };

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
                <span>Sua meta de tempo nessa sessão é {secondsToTime(meta)}</span>
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
                    <h1>{secondsToTime(seconds)}</h1>
                    <h4>Pause: {secondsToTime(pauseSeconds)}</h4>
                </div>

                {handleStageButtons}

            </div >
        </>
    )
};