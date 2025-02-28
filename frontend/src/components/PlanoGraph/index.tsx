import { ApexOptions } from "apexcharts";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { planoElements } from "../../data/planoElements";

import styles from '../../pages/Plano/styles.module.css';

const convertStringToSeconds = (time: string): number => {
    const [hours, minutes] = time.split(":").map(Number);
    return hours * 3600 + minutes * 60;
};

const convertSecondsToTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${hours}h${minutes}m`;
};

export const PlanoGraph = () => {
    const [dadosTabela, setDadosTabela] = useState(planoElements);

    const labels = dadosTabela.map(item => item.materia);
    const seriesData = dadosTabela.map(item => item.sessoes.map(sessao => convertStringToSeconds(sessao.tempo)).reduce((acc, curr) => acc + curr, 0));
    const options: ApexOptions = {
        chart: {
            type: 'bar',
            height: 350
        },
        colors: ['#4e7bfe'],
        plotOptions: {
            bar: {
                borderRadius: 10,
                borderRadiusApplication: 'around',
                horizontal: true,
                barHeight: '75%',
                dataLabels: {
                    position: 'center', // Posição das palavras dentro das colunas
                }
            }
        },
        grid: {
            show: false,
        },
        dataLabels: {
            enabled: true,
            formatter: function (val, opt) {
                return labels[opt.dataPointIndex]; // Exibe as palavras das categorias dentro das colunas
            },
            style: {
                colors: ['#ffffff'],
                fontSize: '14px',
                fontFamily: 'Segoe UI',
                fontWeight: 600,
            },
        },
        xaxis: {
            categories: labels,
            axisBorder: {
                show: false, // Esconde a borda do eixo X
            },
            labels: {
                formatter: function (val) {
                    return convertSecondsToTime(val); // Converte os valores para "datas personalizadas"
                }
            }
            
        },
        yaxis: {
            show: false, // Esconde o eixo Y
            labels: {
                formatter: function (val) {
                    return convertSecondsToTime(val); // Converte os valores para "datas personalizadas"
                }
            }
        },
        fill: {
            colors: ['#6c5ce7', '#4e7bfe'],
            type: 'gradient',
            gradient: {
                shade: 'dark',
                type: "horizontal",
                shadeIntensity: 0.5,
                gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
                inverseColors: false,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 60, 100],
                colorStops: []
            }
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return convertSecondsToTime(val); // Converte os valores para "datas personalizadas" na dica de ferramenta
                }
            },
            x: {
                formatter: function (val, opts) {
                    return labels[opts.dataPointIndex]; // Exibe o nome da matéria na dica de ferramenta
                }
            }
        },
        series: [{
            name: 'Tempo',
            data: seriesData
        }],
    };

    return (
        <>
            <div style={{ width: '100%' }} className={styles["progress-graph"]}>
                <h2 className={styles.h2}>Distribuição do Tempo por Disciplina</h2>
                <ReactApexChart
                    options={options}
                    series={[{ name: 'Tempo', data: seriesData }]}
                    type='bar'
                    height={350}
                />
            </div>
        </>
    );
};