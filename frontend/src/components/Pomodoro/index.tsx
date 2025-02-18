
import { useCallback, useMemo, useState } from "react";
import { Icon } from "./Icon";

import styles from './styles.module.css';

const SECONDS_DEFAULT = 5;

export const Pomodoro = () => {
    const [materiaName, setMateriaName] = useState('');
    const [seconds, setSeconds] = useState(SECONDS_DEFAULT);
    const [pauseSeconds, setPauseSeconds] = useState(0);
    const [timer, setTimer] = useState<any>();

    const [stage, setStage] = useState('ready');

    const startTimer = () => {
        setStage('in_progress');
        const timeInterval = setInterval(() => {
            setSeconds((previousSeconds) => {
                if (previousSeconds === 0) {
                    clearInterval(timeInterval);
                    setTimer(undefined);
                    setStage('done');
                    return 0;
                }

                return previousSeconds - 1;
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
                return 'Concluido';
            default:
                return 'Pronto para iniciar';
        }
    }, [stage]);

    // useCallback executa a função apenas quando o valor de stage é alterado
    const handlePauseButton = useCallback(() => {
        clearInterval(timer);
        setTimer(undefined);
        setStage('pause');
    }, [timer]);

    const handleStopButton = useCallback(() => {
        handlePauseButton();
        setSeconds(SECONDS_DEFAULT);
        setStage('ready');

    }, [handlePauseButton]);


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
                    <div>
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

                    <div>
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
                    <div>
                        <button onClick={startTimer}>
                            <span>Iniciar</span>
                        </button>
                    </div>
                );
        };
    }, [handlePauseButton, stage]);

    return (
        <>
            <div>
                <h1>Cronômetro</h1>
                <h2>{handleStageStatus}</h2>
                <h3>Liquido {secondsToTime(seconds)}</h3>
                <h4>Tempo pausado: {secondsToTime(pauseSeconds)}</h4>
                <div style={{ display: "row" }}>
                    {handleStageButtons}
                </div>
            </div>
        </>
    )
};