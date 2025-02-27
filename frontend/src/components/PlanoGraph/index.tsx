import { ApexOptions } from "apexcharts";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { planoElements } from "../../data/planoElements";

import styles from '../../pages/Plano/styles.module.css';
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
        <>
            <div className={styles["progress-graph"]}>
                <h2 className={styles.h2}>Distribuição do Tempo por Disciplina</h2>
                <div className={styles["progress-bar"]}>
                    <div className={styles.bar} style={{ width: '25%' }}></div>
                    <span className={styles.label}>Matemática</span>
                    <span className={styles.value}>25%</span>
                </div>
                <div className={styles["progress-bar"]}>
                    <div className={styles.bar} style={{ width: '45%' }}></div>
                    <span className={styles.label}>Química</span>
                    <span className={styles.value}>45%</span>
                </div>
                <div className={styles["progress-bar"]}>
                    <div className={styles.bar} style={{ width: '55%' }}></div>
                    <span className={styles.label}>Biologia</span>
                    <span className={styles.value}>55%</span>
                </div>
                <div className={styles["progress-bar"]}>
                    <div className={styles.bar} style={{ width: '80%' }}></div>
                    <span className={styles.label}>Física</span>
                    <span className={styles.value}>80%</span>
                </div>
                <div className={styles["x-axis"]}>
                    <span className={styles.span}>0</span>
                    <span className={styles.span}>5000</span>
                    <span className={styles.span}>10000</span>
                    <span className={styles.span}>15000</span>
                    <span className={styles.span}>20000</span>
                    <span className={styles.span}>25000</span>
                    <span className={styles.span}>30000</span>
                </div>
            </div>

            <div style={{ width: '100%' }}>
                <ReactApexChart
                    options={options}
                    series={[{ data: series }]}
                    type='bar'
                    height={350}
                />
            </div>
        </>
    );
};