import { ApexOptions } from "apexcharts";

import Chart from "react-apexcharts";
import  { useState } from "react";

type ChartData = {
  labels: string[];
  series: {
    x: string;
    y: number;
    goals: {
      name: string;
      value: number;
      strokeColor: string;
    }
  }
};

export const CicloGraph = () => {
  const [state, setState] = useState<ChartData>({
    labels: ["Português", "Matemática", "Biologia", "Quimica", "Física", "Ingês","Literatura", "Redação"],
    series: [
      {x: "Portugues", y: 1200, goals: [{name: "Objetivo", value: 2000, strokeColor: "#142952"}]},
      {x: "Matemática", y: 5400, goals: [{name: "Objetivo", value: 5400, strokeColor: "#142952"}]},
      {x: "Biologia", y: 5200, goals: [{name: "Objetivo", value: 5200, strokeColor: "#142952"}]},
      {x: "Quimica", y: 6500, goals: [{name: "Objetivo", value: 6500, strokeColor: "#142952"}]},
      {x: "Física", y: 6600, goals: [{name: "Objetivo", value: 6600, strokeColor: "#142952"}]},
      {x: "Ingês", y: 120, goals: [{name: "Objetivo", value: 7500, strokeColor: "#142952"}]},
      {x: "Literatura", y: 8700, goals: [{name: "Objetivo", value: 8700, strokeColor: "#142952"}]},
    ],

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
    colors: ["#3366cc"],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: true,
      showForSingleSeries: true,
      customLegendItems: ["Tempo Estudado", "Objetivo"],
      markers: {
        fillColors: ["#3366cc", "#775DD0"],
      },
    },
    xaxis: {
      categories: state.labels,
    },
    yaxis: {
      title: {
        text: "Horas",
      },
    },
    

  };

return (
  <div id="chart">
    <Chart
      options={options}
      series={[{name: "Horas", data: state.series}]}
      type='bar'
      height={350}
      width={500}
    />
  </div>
);
};