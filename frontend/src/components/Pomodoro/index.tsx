
import { useState } from "react";
import { Icon } from "./Icon";

import styles from './styles.module.css';

const SECONDS_DEFAULT = 60;

export const Pomodoro = () => {
    const [materiaName, setMateriaName] = useState('');
    const [seconds, setSeconds] = useState(SECONDS_DEFAULT);
    const [timer, setTimer] = useState<any>();


    const handleStartButton = () => {
    };


    const startTimer = () => {
        setInterval(() => {
            console.log('1 segundo passou');
        }, 1000);
    };

    const secondsToTime = (seconds: number): string => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secondsLast = seconds % 60;

        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secondsLast).padStart(2, '0')}`;
    };



    return (
        <div>
            <h1>Cronômetro</h1>
            <h2>Pronto</h2>

            <h3>{secondsToTime(seconds)}</h3>
            <div style={{ display: "row" }}>
                <button style={{ padding: "10px 20px", margin: "0 10px" }}>
                    <i className="fa-solid fa-pause" style={styles} />
                </button>
                <button onClick={startTimer} style={{ padding: "10px 20px", margin: "0 10px" }}>
                    <Icon variant={"play"} />
                </button>
                <button style={{ padding: "10px 20px", margin: "0 10px" }}>
                    <i className="fa-solid fa-stop" />
                </button>
                <button style={{ padding: "10px 20px", margin: "0 10px" }}>
                    <i className="fa-solid fa-check" />
                </button>

            </div>
        </div>
    )
};