import { ApexOptions } from "apexcharts";

import Chart from "react-apexcharts";
import { useState } from "react";

const primaryColor = "#a41455";
const secondaryColor = "#17030c";
const labels = ["Português", "Matemática", "Biologia", "Química", "Física", "Inglês", "Literatura", "Redação"];
const dadosMock = ["01:30:00", "02:15:00", "00:45:00", "03:00:00", "01:50:00", "02:30:00", "01:10:00", "02:00:00"];
const metasMock = ["02:00:00", "02:30:00", "01:00:00", "03:30:00", "02:00:00", "03:00:00", "01:30:00", "02:15:00"];

type ChartData = {
  labels: string[];
  series: {
    x: string;
    y: number;
    goals: {
      value: number;
      strokeColor: string
    }[];
  }[];
};

const timeToMinutes = (time: string): number => {
  const [hh, mm, ss] = time.split(":").map(Number);
  return hh * 60 + mm + ss / 60; // Converte para minutos
};
const minutesToTime = (minutes: number): string => {
  const hh = Math.floor(minutes / 60);
  const mm = Math.floor(minutes % 60);
  return `${String(hh).padStart(2, "0")}:${String(mm).padStart(2, "0")}:00`;
}

export const CicloGraph = () => {
  const [state, setState] = useState<ChartData>({
    labels,
    series: labels.map((xLabel, index) => ({
      x: xLabel,
      y: timeToMinutes(dadosMock[index]),
      goals: [{ name: "Meta", value: timeToMinutes(metasMock[index]), strokeColor: secondaryColor }],
    })),


  });
  


  const options: ApexOptions = {
    chart: {
      type: 'bar',
    },
    
    plotOptions: {
      bar: {
        columnWidth: "40%",
      },
    },
    colors: [primaryColor],
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: state.labels,
      labels: {
        rotate: -45,
        trim: false,
        rotateAlways: true,
      },
    },
    yaxis: {
      title: {
        text: "Tempo (hh:mm)",
      },
      labels: {
        formatter: (value) => minutesToTime(value as number),
      },

    },


  };

  return (
    <div id="chart" style={{ width: "100%" }}>
      <Chart
        options={options}
        series={[{ name: "Horas", data: state.series }]}
        type='bar'
        height={350}
   
      />
    </div>
  );
};