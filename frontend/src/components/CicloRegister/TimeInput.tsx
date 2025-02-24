import { useState } from "react";
import styles from "./styles.module.css";

interface TimeInputProps {
    initialTime?: number; // o '?' indica que a propriedade é opcional
}
const TimeInput = ({ initialTime = 0 }: TimeInputProps) => {
    const [hours, setHours] = useState(Math.floor(initialTime / 3600));
    const [minutes, setMinutes] = useState(Math.floor((initialTime % 3600) / 60));
    const [seconds, setSeconds] = useState(initialTime % 60);

    const formatTime = () =>
        `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

    return (
        <div className={styles.timeinput} >
            <select value={hours} onChange={(e) => setHours(Number(e.target.value))}>
                {Array.from({ length: 24 }, (_, i) => (
                    <option key={i} value={i}>
                        {String(i).padStart(2, "0")}
                    </option>
                ))}
            </select>

            <span>:</span>

            <select value={minutes} onChange={(e) => setMinutes(Number(e.target.value))}>
                {Array.from({ length: 60 }, (_, i) => (
                    <option key={i} value={i}>
                        {String(i).padStart(2, "0")}
                    </option>
                ))}
            </select>

            <span>:</span>

            <select value={seconds} onChange={(e) => setSeconds(Number(e.target.value))}>
                {Array.from({ length: 60 }, (_, i) => (
                    <option key={i} value={i}>
                        {String(i).padStart(2, "0")}
                    </option>
                ))}
            </select>
            <input type="hidden" name={"horasLiquidas"} value={formatTime()} />
        </div>
    );
};

export default TimeInput;