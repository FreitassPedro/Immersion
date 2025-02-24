import './styles.module.css';
import styles from './styles.module.css';
import { FC, FormEvent, useState } from 'react';
import { NovoRegistro } from './novoRegistro';
import TimeInput from './TimeInput';
import { CicloTableItem } from '../../data/cicloTableItem';


type CicloRegisterProps = {
    isOpen: boolean;
    onClose: () => void;
    onSave: (novoRegistro: NovoRegistro) => void;
    item: CicloTableItem;
    secondsDone: number;
}

export const CicloRegister: FC<CicloRegisterProps> = ({ isOpen, onClose, onSave, item, secondsDone }) => {
    const padraoDate = new Date();
    const [date, setDate] = useState(padraoDate.toISOString().split('T')[0]);
    if (!isOpen || item === null) {
        return null;
    }

    const handleDateChange = (event: FormEvent<HTMLInputElement>) => {
        const dateCollect = new Date(event.currentTarget.value);
        setDate(dateCollect.toISOString().split('T')[0]);
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;

        const novoRegistro: NovoRegistro = {
            id: item.id,
            data: form.date.value,
            inicio: new Date(),
            fim: new Date(),
            materia: item.materia,
            horasPausa: form.horasPausa.value,
            horasFeitas: form.horasLiquidas.value,
            tags: form.tags.value,
            exerciciosAcertos: form.exerciciosAcertos.value,
            exerciciosFeitos: form.exerciciosFeitos.value,
            foco: form.foco.value,
            produtividade: form.produtividade.value,
            anotacoes: "Anotações"
        };

        console.log(novoRegistro);
        onSave(novoRegistro);
        onClose();
    }

    return (
        <div className={styles.cicloRegister}>
            <div>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.formHeader}>
                        <i className="fa-regular fa-book-open-cover" />
                        <h1>Registrar</h1>
                    </div>
                    <span>Insira informações sobre</span>
                    <div className={styles.formGroup}>
                        <label>
                            <div className={styles.inputGroup}>
                                <span>Data</span>
                                <input type="date" placeholder="Selecione a data" name="date" value={date} onChange={handleDateChange} />
                            </div>
                        </label>
                        <label>
                            <div className={styles.inputGroup}>
                                <span>Liquido (hh:mm:ss)</span>
                                <TimeInput initialTime={secondsDone} />
                            </div>
                        </label>
                        <label>
                            <div className={styles.inputGroup}>
                                <span>Pausa</span>
                                <input type="number" placeholder="Digite o tempo de pausa" name="horasPausa" />

                            </div>
                        </label >
                    </div >
                    <div className={styles.formGroup}>
                        <label>
                            <div className={styles.inputGroup}>
                                <span>Matéria</span>
                                <input type="text" placeholder={item.materia} disabled name="materia" />
                            </div>
                        </label >
                    </div >
                    <div className={styles.formGroup}>
                        <label>
                            <div className={styles.inputGroup}>
                                <span>Método de estudo</span>
                                <select name="metodo" id="metodo" required>

                                    <option value="">Selecione o método</option> {/* Placeholder no select */}
                                    <option value="video">Vídeo</option>
                                    <option value="exercicios">Exercícios</option>
                                    <option value="leitura">Leitura</option>
                                    <option value="flashcard">Flashcard</option>
                                    <option value="simulado">Simulado</option>
                                </select>
                            </div>
                        </label >
                    </div >
                    <div className={styles.formGroup}>
                        <label>
                            <div className={styles.inputGroup}>
                                <span>Tags</span>
                                <select name="tags" id="tags">
                                    <option value="">Selecione a tag</option> {/* Placeholder no select */}

                                    <option value="revisar">Revisar</option>
                                    <option value="falta-atencao">Falta atenção</option>
                                    <option value="finalizado">Finalizado</option>
                                    <option value="duvidas">Dúvidas</option>
                                    <option value="simulado">Simulado</option>
                                </select>
                            </div>
                        </label >
                    </div >
                    <div className={styles.formGroup}>
                        < label >
                            <div className={styles.inputGroup}>
                                < span > Exercícios feitos</span >
                                <input type="number" placeholder="Digite o número de exercícios" name="exerciciosFeitos" />
                            </div >
                        </label >
                        <label>
                            <div className={styles.inputGroup}>
                                <span>Acertos</span>
                                <input type="number" placeholder="Digite o número de acertos" name="exerciciosAcertos" />
                            </div>
                        </label >
                    </div >
                    <div className={styles.formGroup}>
                        < label >
                            <div className={styles.inputGroup}>
                                < span > Foco</span >
                                <input type="range" min="1" max="5" step="0.5" name="foco" /> {/* Range não tem placeholder */}
                            </div >
                        </label >
                        <label>
                            <div className={styles.inputGroup}>
                                <span>Produtividade</span>

                                <div>
                                    <input type="radio" id="produtividade1" name="produtividade" value="1" />
                                    <label htmlFor="produtividade1">1</label>

                                </div>



                            </div>
                        </label >
                    </div >
                    <div className={styles.formGroup}>
                        <label>
                            <div className={styles.inputGroup}>
                                <span>Anotações</span>
                                <textarea className={styles.textarea} placeholder="Digite suas anotações" name="anotacoes"></textarea>
                            </div>
                        </label >
                    </div >
                    <div className={styles.formActions}>
                        < button type="button" onClick={onClose} > Cancel</button >
                        <button type="submit">Registrar</button>
                    </div >

                </form >
            </div >
        </div >
    );
};

export default CicloRegister;