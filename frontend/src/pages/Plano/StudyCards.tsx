import styles from './styles.module.css';


export const StudyCards = () => {
    return (
        <>
            <div className={styles["dashboard-card"]}>
                <div className={styles["dashboard-header"]}>
                    <div className={styles["dashboard-title"]}>
                        <h2 className={styles.h2}> + Adicionar/Remover Matéria</h2>
                        <p className={styles.p}>Clique aqui para ajustar suas matéria de acordo com suas preferências</p>
                    </div>
                </div>
            </div>
            <div className={styles["studycards-container"]}>
                <div className={styles["study-card"]}>
                    <div className={styles["study-card-header"]}>
                        <h3 className={styles.h3}>Física</h3>
                        <div className={styles.time}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                                <path d="M12 7V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                            02:30
                        </div>
                    </div>
                    <div className={styles["study-card-content"]}>
                        <div className={styles["sessions-header"]}>
                            <h4 className={styles.h4}>Sessões</h4>
                            <span className={styles.span}>(1 programada)</span>
                        </div>
                        <input type="text" className={styles["time-input"]} defaultValue="1h" />
                        <input type="text" className={styles["time-input"]} defaultValue="1h" />
                        <div className={styles["sessions-manager"]}>
                            <div className={styles["sessions-header"]}>
                                <h4 className={styles.h4}>Registros</h4>
                                <span className={styles.span}>(2 realizadas)</span>
                            </div>
                            <div className={styles["sessions-list"]}>
                                <div className={styles["session-item"]}>
                                    <div className={styles["session-info"]}>
                                        <div className={styles["session-title"]}>Cinemática - Velocidade Média</div>
                                        <div className={styles["session-details"]}>
                                            <div className={styles["session-detail"]}>
                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                                                    <path d="M12 7V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                                </svg>
                                                30min
                                            </div>
                                            <div className={styles["session-detail"]}>
                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect x="3" y="6" width="18" height="15" rx="2" stroke="currentColor" strokeWidth="2" />
                                                    <path d="M3 10H21" stroke="currentColor" strokeWidth="2" />
                                                    <path d="M8 3V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                                    <path d="M16 3V6" stroke="currentColor" strokeLinecap="round" />
                                                </svg>
                                                Seg, Qua
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles["session-actions"]}>
                                        <button className={styles["session-btn"]}>
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 6V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                                <path d="M6 12H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                            </svg>
                                        </button>
                                        <button className={styles["session-btn"]}>
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5 5L19 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                                <path d="M5 19L19 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className={styles["session-item"]}>
                                    <div className={styles["session-info"]}>
                                        <div className={styles["session-title"]}>Leis de Newton</div>
                                        <div className={styles["session-details"]}>
                                            <div className={styles["session-detail"]}>
                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                                                    <path d="M12 7V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                                </svg>
                                                45min
                                            </div>
                                            <div className={styles["session-detail"]}>
                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect x="3" y="6" width="18" height="15" rx="2" stroke="currentColor" strokeWidth="2" />
                                                    <path d="M3 10H21" stroke="currentColor" strokeWidth="2" />
                                                    <path d="M8 3V6" stroke="currentColor" strokeLinecap="round" />
                                                    <path d="M16 3V6" stroke="currentColor" strokeLinecap="round" />
                                                </svg>
                                                Ter, Sex
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles["session-actions"]}>
                                        <button className={styles["session-btn"]}>
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 6V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                                <path d="M6 12H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                            </svg>
                                        </button>
                                        <button className={styles["session-btn"]}>
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5 5L19 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                                <path d="M5 19L19 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <button className={styles["add-session-btn"]}>
                                <span className={styles["add-session-icon"]}>+</span> Configurar sessão
                            </button>
                        </div>
                    </div>
                </div>
                <div className={styles["study-card"]}>
                    <div className={styles["study-card-header"]}>
                        <h3 className={styles.h3}>Física</h3>
                        <div className={styles.time}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                                <path d="M12 7V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                            02:30
                        </div>
                    </div>
                    <div className={styles["study-card-content"]}>
                        <div className={styles["sessions-header"]}>
                            <h4 className={styles.h4}>Sessões</h4>
                            <span className={styles.span}>(1 programada)</span>
                        </div>
                        <input type="text" className={styles["time-input"]} defaultValue="1h" />
                        <input type="text" className={styles["time-input"]} defaultValue="1h" />
                        <div className={styles["sessions-manager"]}>
                            <div className={styles["sessions-header"]}>
                                <h4 className={styles.h4}>Registros</h4>
                                <span className={styles.span}>(2 realizadas)</span>
                            </div>
                            <div className={styles["sessions-list"]}>
                                <div className={styles["session-item"]}>
                                    <div className={styles["session-info"]}>
                                        <div className={styles["session-title"]}>Cinemática - Velocidade Média</div>
                                        <div className={styles["session-details"]}>
                                            <div className={styles["session-detail"]}>
                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                                                    <path d="M12 7V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                                </svg>
                                                30min
                                            </div>
                                            <div className={styles["session-detail"]}>
                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect x="3" y="6" width="18" height="15" rx="2" stroke="currentColor" strokeWidth="2" />
                                                    <path d="M3 10H21" stroke="currentColor" strokeWidth="2" />
                                                    <path d="M8 3V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                                    <path d="M16 3V6" stroke="currentColor" strokeLinecap="round" />
                                                </svg>
                                                Seg, Qua
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles["session-actions"]}>
                                        <button className={styles["session-btn"]}>
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 6V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                                <path d="M6 12H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                            </svg>
                                        </button>
                                        <button className={styles["session-btn"]}>
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5 5L19 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                                <path d="M5 19L19 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className={styles["session-item"]}>
                                    <div className={styles["session-info"]}>
                                        <div className={styles["session-title"]}>Leis de Newton</div>
                                        <div className={styles["session-details"]}>
                                            <div className={styles["session-detail"]}>
                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                                                    <path d="M12 7V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                                </svg>
                                                45min
                                            </div>
                                            <div className={styles["session-detail"]}>
                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect x="3" y="6" width="18" height="15" rx="2" stroke="currentColor" strokeWidth="2" />
                                                    <path d="M3 10H21" stroke="currentColor" strokeWidth="2" />
                                                    <path d="M8 3V6" stroke="currentColor" strokeLinecap="round" />
                                                    <path d="M16 3V6" stroke="currentColor" strokeLinecap="round" />
                                                </svg>
                                                Ter, Sex
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles["session-actions"]}>
                                        <button className={styles["session-btn"]}>
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 6V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                                <path d="M6 12H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                            </svg>
                                        </button>
                                        <button className={styles["session-btn"]}>
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5 5L19 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                                <path d="M5 19L19 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <button className={styles["add-session-btn"]}>
                                <span className={styles["add-session-icon"]}>+</span> Configurar sessão
                            </button>
                        </div>
                    </div>
                </div>
                <div className={styles["study-card"]}>
                    <div className={styles["study-card-header"]}>
                        <h3 className={styles.h3}>Física</h3>
                        <div className={styles.time}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                                <path d="M12 7V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                            02:30
                        </div>
                    </div>
                    <div className={styles["study-card-content"]}>
                        <div className={styles["sessions-header"]}>
                            <h4 className={styles.h4}>Sessões</h4>
                            <span className={styles.span}>(1 programada)</span>
                        </div>
                        <input type="text" className={styles["time-input"]} defaultValue="1h" />
                        <input type="text" className={styles["time-input"]} defaultValue="1h" />
                        <div className={styles["sessions-manager"]}>
                            <div className={styles["sessions-header"]}>
                                <h4 className={styles.h4}>Registros</h4>
                                <span className={styles.span}>(2 realizadas)</span>
                            </div>
                            <div className={styles["sessions-list"]}>
                                <div className={styles["session-item"]}>
                                    <div className={styles["session-info"]}>
                                        <div className={styles["session-title"]}>Cinemática - Velocidade Média</div>
                                        <div className={styles["session-details"]}>
                                            <div className={styles["session-detail"]}>
                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                                                    <path d="M12 7V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                                </svg>
                                                30min
                                            </div>
                                            <div className={styles["session-detail"]}>
                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect x="3" y="6" width="18" height="15" rx="2" stroke="currentColor" strokeWidth="2" />
                                                    <path d="M3 10H21" stroke="currentColor" strokeWidth="2" />
                                                    <path d="M8 3V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                                    <path d="M16 3V6" stroke="currentColor" strokeLinecap="round" />
                                                </svg>
                                                Seg, Qua
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles["session-actions"]}>
                                        <button className={styles["session-btn"]}>
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 6V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                                <path d="M6 12H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                            </svg>
                                        </button>
                                        <button className={styles["session-btn"]}>
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5 5L19 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                                <path d="M5 19L19 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className={styles["session-item"]}>
                                    <div className={styles["session-info"]}>
                                        <div className={styles["session-title"]}>Leis de Newton</div>
                                        <div className={styles["session-details"]}>
                                            <div className={styles["session-detail"]}>
                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                                                    <path d="M12 7V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                                </svg>
                                                45min
                                            </div>
                                            <div className={styles["session-detail"]}>
                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect x="3" y="6" width="18" height="15" rx="2" stroke="currentColor" strokeWidth="2" />
                                                    <path d="M3 10H21" stroke="currentColor" strokeWidth="2" />
                                                    <path d="M8 3V6" stroke="currentColor" strokeLinecap="round" />
                                                    <path d="M16 3V6" stroke="currentColor" strokeLinecap="round" />
                                                </svg>
                                                Ter, Sex
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles["session-actions"]}>
                                        <button className={styles["session-btn"]}>
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 6V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                                <path d="M6 12H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                            </svg>
                                        </button>
                                        <button className={styles["session-btn"]}>
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5 5L19 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                                <path d="M5 19L19 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <button className={styles["add-session-btn"]}>
                                <span className={styles["add-session-icon"]}>+</span> Configurar sessão
                            </button>
                        </div>
                    </div>
                </div>

                <div className={styles["study-card"]}>
                    <div className={styles["study-card-header"]}>
                        <h3 className={styles.h3}>Física</h3>
                        <div className={styles.time}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                                <path d="M12 7V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                            02:30
                        </div>
                    </div>
                    <div className={styles["study-card-content"]}>
                        <div className={styles["sessions-header"]}>
                            <h4 className={styles.h4}>Sessões</h4>
                            <span className={styles.span}>(1 programada)</span>
                        </div>
                        <input type="text" className={styles["time-input"]} defaultValue="1h" />
                        <div className={styles["sessions-manager"]}>
                            <div className={styles["sessions-header"]}>
                                <h4 className={styles.h4}>Sessões</h4>
                                <span className={styles.span}>(2 realizadas)</span>
                            </div>
                            <div className={styles["sessions-list"]}>
                                <div className={styles["session-item"]}>
                                    <div className={styles["session-info"]}>
                                        <div className={styles["session-title"]}>Cinemática - Velocidade Média</div>
                                        <div className={styles["session-details"]}>
                                            <div className={styles["session-detail"]}>
                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                                                    <path d="M12 7V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                                </svg>
                                                30min
                                            </div>
                                            <div className={styles["session-detail"]}>
                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect x="3" y="6" width="18" height="15" rx="2" stroke="currentColor" strokeWidth="2" />
                                                    <path d="M3 10H21" stroke="currentColor" strokeWidth="2" />
                                                    <path d="M8 3V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                                    <path d="M16 3V6" stroke="currentColor" strokeLinecap="round" />
                                                </svg>
                                                Seg, Qua
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles["session-actions"]}>
                                        <button className={styles["session-btn"]}>
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 6V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                                <path d="M6 12H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                            </svg>
                                        </button>
                                        <button className={styles["session-btn"]}>
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5 5L19 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                                <path d="M5 19L19 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className={styles["session-item"]}>
                                    <div className={styles["session-info"]}>
                                        <div className={styles["session-title"]}>Leis de Newton</div>
                                        <div className={styles["session-details"]}>
                                            <div className={styles["session-detail"]}>
                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                                                    <path d="M12 7V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                                </svg>
                                                45min
                                            </div>
                                            <div className={styles["session-detail"]}>
                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect x="3" y="6" width="18" height="15" rx="2" stroke="currentColor" strokeWidth="2" />
                                                    <path d="M3 10H21" stroke="currentColor" strokeWidth="2" />
                                                    <path d="M8 3V6" stroke="currentColor" strokeLinecap="round" />
                                                    <path d="M16 3V6" stroke="currentColor" strokeLinecap="round" />
                                                </svg>
                                                Ter, Sex
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles["session-actions"]}>
                                        <button className={styles["session-btn"]}>
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 6V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                                <path d="M6 12H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                            </svg>
                                        </button>
                                        <button className={styles["session-btn"]}>
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5 5L19 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                                <path d="M5 19L19 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <button className={styles["add-session-btn"]}>
                                <span className={styles["add-session-icon"]}>+</span> Adicionar nova sessão
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StudyCards;