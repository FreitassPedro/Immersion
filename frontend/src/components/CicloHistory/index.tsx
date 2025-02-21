import styles from './styles.module.css';
import { cicloHistoryItems } from '../../data/cicloRegistros';
import { useMemo } from 'react';
import { SideBar } from '../SideBar';

const CicloHistory = () => {

    const agruparPorData = useMemo(() => {
        return cicloHistoryItems.reduce((acc, item) => {
            if (!acc[item.data]) {
                acc[item.data] = [];
            }
            acc[item.data].push(item);
            return acc;
        }, {} as Record<string, typeof cicloHistoryItems>);
    }, [cicloHistoryItems]);

    return (
        <>
            <SideBar />
            <div className={styles.mycontainer}>
                <div className={styles.dateGroup}>
                    {Object.entries(agruparPorData).map(([data, registros]) => (
                        <div key={data} className={styles.dateGroup}>
                            <h2>{data}</h2>
                            <div className={styles.cardGroup}>
                                {registros.map((registro, index) => (
                                    <div key={index} className={styles.card}>
                                        <div className={styles.cardTitle}>
                                            <h3><i className="fas fa-book"></i>{registro.materia}</h3>
                                            <span>{registro.dataInicio} ➔ {registro.dataFim}</span>
                                            <strong><i className="fas fa-lightbulb" /> Método: {registro.metodo}</strong>
                                        </div>
                                        <div className={styles.cardContent}>
                                            <div className={styles.cardGeneral}>
                                                <div className={styles.cardItem}><i className="fas fa-clock" /><strong>Horas Feitas:</strong> {registro.horasFeitas}</div>
                                                <div className={styles.cardItem}><i className="fas fa-coffee" /><strong>Horas de Pausa:</strong> {registro.horasPausa}</div>
                                                <div className={styles.cardItem}><i className="fas fa-eye" /><strong>Foco:</strong> {registro.foco}</div>
                                                <div className={styles.cardItem}><i className="fas fa-chart-line" /><strong>Produtividade:</strong> {registro.produtividade}</div>
                                            </div>
                                            <div className={styles.notes}>
                                                <h4><i className="fas fa-sticky-note"></i> Anotações/Comentários</h4>
                                                <div className={styles.tags}>
                                                    {registro.tags.map((tag, tagIndex) => (
                                                        <span key={tagIndex}>{tag}</span>
                                                    ))}
                                                </div>
                                                <p>{registro.anotacoes}</p>
                                            </div>
                                        </div>
                                    </div>

                                ))}
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </>
    );
}

export default CicloHistory;