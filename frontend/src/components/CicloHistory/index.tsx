import styles from './styles.module.css';

const CicloHistory = () => {
    return (
        <div className={styles.mycontainer}>
            <div className={styles.dateGroup}>
                <h2>10/02/2025</h2>

                <div className={styles.cardGroup}>
                    <div className={styles.card}>
                        <div className={styles.cardTitle}>
                            <h3><i className="fas fa-book"></i>Matemática</h3>
                            <strong><i className="fas fa-lightbulb" /> Método: Resolução de exercícios</strong>
                        </div>
                        <div className={styles.cardContent}>
                            <div className={styles.cardGeneral}>
                                <div className={styles.cardItem}><i className="fas fa-clock" /><strong>Horas Feitas:</strong> 02:15:30</div>
                                <div className={styles.cardItem}><i className="fas fa-coffee" /><strong>Horas de Pausa:</strong> 00:30:00</div>
                                <div className={styles.cardItem}><i className="fas fa-eye" /><strong>Foco:</strong> 4.5</div>
                                <div className={styles.cardItem}><i className="fas fa-chart-line" /><strong>Produtividade:</strong> 4.2</div>
                            </div>
                            <div className={styles.notes}>
                                <h4><i className="fas fa-sticky-note"></i> Anotações/Comentários</h4>
                                <div className={styles.tags}>
                                    <span>Revisar</span>
                                    <span>Simulado</span>
                                </div>
                                <p>Revisar a questão 5 da prova passada.</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardTitle}>
                            <h3><i className="fas fa-book"></i>Inglês</h3>
                            <strong><i className="fas fa-lightbulb" /> Método: Simulado</strong>
                        </div>
                        <div className={styles.cardContent}>
                            <div className={styles.cardGeneral}>
                                <div className={styles.cardItem}><i className="fas fa-clock" /><strong>Horas Feitas:</strong> 02:15:30</div>
                                <div className={styles.cardItem}><i className="fas fa-coffee" /><strong>Horas de Pausa:</strong> 00:30:00</div>
                                <div className={styles.cardItem}><i className="fas fa-eye" /><strong>Foco:</strong> 4.5</div>
                                <div className={styles.cardItem}><i className="fas fa-chart-line" /><strong>Produtividade:</strong> 4.2</div>
                            </div>
                            <div className={styles.notes}>
                                <h4><i className="fas fa-sticky-note"></i> Anotações/Comentários</h4>
                                <div className={styles.tags}>
                                    <span>Revisar</span>
                                    <span>Simulado</span>
                                </div>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex asperiores sint perferendis magni. Officia nam animi explicabo laboriosam numquam nulla veniam, magnam delectus sunt tempora consequatur provident neque, incidunt qui.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default CicloHistory;