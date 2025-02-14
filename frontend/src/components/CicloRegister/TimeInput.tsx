import { useState } from "react";

const TimeInput = () => {

    // regex: ^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$
    const [hours, setHours] = useState<number>(0);
    const [minutes, setMinutes] = useState<number>(0);
    const [seconds, setSeconds] = useState<number>(0);

  

    return (
        <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
            {/* Selecionar Horas */}
            <select value={hours} onChange={(e) => setHours(Number(e.target.value))}>
                {Array.from({ length: 24 }, (_, i) => (
                    <option key={i} value={i}>
                        {String(i).padStart(2, "0")}
                    </option>
                ))}
            </select>

            <span>:</span>

            {/* Selecionar Minutos */}
            <select value={minutes} onChange={(e) => setMinutes(Number(e.target.value))}>
                {Array.from({ length: 60 }, (_, i) => (
                    <option key={i} value={i}>
                        {String(i).padStart(2, "0")}
                    </option>
                ))}
            </select>

            <span>:</span>

            {/* Selecionar Segundos */}
            <select value={seconds} onChange={(e) => setSeconds(Number(e.target.value))}>
                {Array.from({ length: 60 }, (_, i) => (
                    <option key={i} value={i}>
                        {String(i).padStart(2, "0")}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default TimeInput;