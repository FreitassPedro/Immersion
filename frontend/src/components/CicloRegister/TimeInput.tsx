import { useEffect, useState } from "react";
import styles from "./styles.module.css";

const TimeInput = ({ initialTime }:
    { initialTime: number }) => {

    const [hours, setHours] = useState<number>(0);
    const [minutes, setMinutes] = useState<number>(0);
    const [seconds, setSeconds] = useState<number>(0);

    const [time, setTime] = useState<string>();

    useEffect(() => {
        if (initialTime > 0) {
            const h = Math.floor(initialTime / 3600);
            const m = Math.floor((initialTime % 3600) / 60);
            const s = initialTime % 60;

            setHours(h);
            setMinutes(m);
            setSeconds(s);
        }
        setTime(`${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`);
    }, [hours, minutes, seconds]);

    return (
        <div className={styles.timeinput} style={{}}>
            {/* Selecionar Horas */}
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
            <input type="hidden" name={"horasLiquidas"} value={time} />
        </div>
    );
};

export default TimeInput;