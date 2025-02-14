import { useState } from "react";

const TimeInput = ({onChange}:
    {
        onChange: (hours: number, minutes: number, seconds: number) => void;
    }
) => {

    const [hours, setHours] = useState<number>(0);
    const [minutes, setMinutes] = useState<number>(0);
    const [seconds, setSeconds] = useState<number>(0);


    const totalSeconds = hours * 3600 + minutes * 60 + seconds;

    return (
        <div className="timeinput" style={{}}>
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
            <input type="hidden" name={"horasLiquidas"} value={totalSeconds} />

        </div>
    );
};

export default TimeInput;