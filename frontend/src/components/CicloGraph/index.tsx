import { ApexOptions } from "apexcharts";

import Chart from "react-apexcharts";

import { cicloTableItems } from "../../data/cicloTableItem";

const primaryColor = "#a41455";
const secondaryColor = "#17030c";

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
  return `${String(hh).padStart(2, "0")}:${String(mm).padStart(2, "0")}`;
}

export const CicloGraph = () => {
  const labels = cicloTableItems.map(item => item.materia);
  const horasFeitas = cicloTableItems.map(item => item.horasRealizadas);
  const horasMeta = cicloTableItems.map(item => item.horasMeta);

  // Cálculo do 'series' baseado nos dados estáticos
  const series = labels.map((xLabel, index) => ({
    x: xLabel,
    y: timeToMinutes(horasFeitas[index]),
    goals: [{ name: "Meta", value: timeToMinutes(horasMeta[index]), strokeColor: secondaryColor }],
  }));

  const options: ApexOptions = {
    chart: {
      type: 'bar',
    },

    legend: {
      fontFamily: "Inter, sans-serif",
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
      categories: labels,
      labels: {
        rotate: -45,
        trim: false,
        rotateAlways: true,
      },
    },
    yaxis: {
      title: {
        style: {
          fontSize: "14px",
          fontWeight: 400,
          fontFamily: "Inter, sans-serif",
        },
        text: "Tempo (hh:mm)",
      },
      labels: {
        style: {
          fontSize: "12px",
          fontWeight: 300,
          fontFamily: "Inter, sans-serif",
        },
        formatter: (value) => minutesToTime(value as number),
      },

    },


  };

  return (
    <div id="chart" style={{ width: "100%" }}>
      <Chart
        options={options}
        series={[{ name: "Horas", data: series }]}
        type='bar'
        height={350}

      />
    </div>
  );
};