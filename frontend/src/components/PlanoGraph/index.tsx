import { ApexOptions } from "apexcharts";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { planoElements } from "../../data/planoElements";

const convertStringToSeconds = (time: string): number => {
    const [hours, minutes] = time.split(":").map(Number);
    return hours * 3600 + minutes * 60;
};

export const PlanoGraph = () => {
    const [dadosTabela, setDadosTabela] = useState(planoElements);

    const labels = dadosTabela.map(item => item.materia);
    const series = dadosTabela.map(item => item.sessoes.map(sessao => convertStringToSeconds(sessao.tempo)).reduce((acc, curr) => acc + curr, 0));
    const options: ApexOptions = {
        chart: {
            type: 'bar',
            height: 350
        },
        plotOptions: {
            bar: {
                borderRadius: 4,
                borderRadiusApplication: 'end',
                horizontal: true,
            }
        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
            categories: labels,
        },

        series: series,
    };


    return (
        <div style={{ width: '100%' }}>
            <ReactApexChart
                options={options}
                series={[{ data: series }]}
                type='bar'
                height={350}
            />
        </div>
    );
};