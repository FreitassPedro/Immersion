import './styles.css';
import React, { FC, FormEvent, useState } from 'react';
import { NovoRegistro } from './novoRegistro';
import TimeInput from './TimeInput';


type CicloRegisterProps = {
    isOpen: boolean;
    onClose: () => void;
    updateItemTabela: (novoRegistro: NovoRegistro) => void;
    itemId: number | null;
}

export const CicloRegister: FC<CicloRegisterProps> = ({ isOpen, onClose, updateItemTabela ,itemId}) => {
    const padraoDate = new Date();
    const [date, setDate] = useState(padraoDate.toISOString().split('T')[0]);
    if (!isOpen || itemId === null) {
        return null;
    }


    const handleDateChange = (event: FormEvent<HTMLInputElement>) => {
        const dateCollect = new Date(event.currentTarget.value);
        setDate(dateCollect.toISOString().split('T')[0]);
    }

    const handleTimeChange = (hours: number, minutes: number, seconds: number) => {
        const time = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
        console.log(time);
    }
    
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        

        const novoRegistro: NovoRegistro = {
            id: itemId,
            data: form.date.value,
            materia: form.materia.value,
            horasPausa: form.horasPausa.value,
            horasFeitas: form.horasLiquidas.value,
            tags: form.tags.value,
            exerciciosAcertos: form.exerciciosAcertos.value,
            exerciciosFeitos: form.exerciciosFeitos.value,
            foco: form.foco.value,
            produtividade: form.produtividade.value
        };

        console.log(novoRegistro);
        updateItemTabela(novoRegistro);
        onClose();
    }

    return (
        <div className='ciclo-register'>
            <div>
                <form onSubmit={handleSubmit}>
                    <h1>Registrar</h1>
                    <span>Insira informações sobre</span>
                    <div className="form-group">
                        <label>
                            <div className="input-group">
                                <span>Data</span>

                                <input type="date" placeholder="Selecione a data" name="date" value={date} onChange={handleDateChange}/>
                            </div>
                        </label>
                        <label>
                            <div className="input-group">
                                <span>Liquido (hh:mm:ss)</span>
                                <TimeInput onChange={handleTimeChange}  />                        
                            </div>
                        </label>
                        <label>
                            <div className="input-group">
                                <span>Pausa</span>  
                                <input type="number" placeholder="Digite o tempo de pausa" name="horasPausa" />

                            </div>
                        </label>
                    </div>
                    <div className='form-group'>
                        <label>
                            <div className="input-group">
                                <span>Matéria</span>
                                <input type="text" placeholder="Digite a matéria" name="materia"/>
                            </div>
                        </label>
                    </div>
                    <div className='form-group'>
                        <label>
                            <div className="input-group">
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
                        </label>
                    </div>
                    <div className='form-group'>
                        <label>
                            <div className="input-group">
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
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            <div className="input-group">
                                <span>Exercícios feitos</span>
                                <input type="number" placeholder="Digite o número de exercícios" name="exerciciosFeitos"/>
                            </div>
                        </label>
                        <label>
                            <div className="input-group">
                                <span>Acertos</span>
                                <input type="number" placeholder="Digite o número de acertos"  name="exerciciosAcertos"/>
                            </div>
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            <div className="input-group">
                                <span>Foco</span>
                                <input type="range" min="1" max="5" step="0.5" name="foco"/> {/* Range não tem placeholder */}
                            </div>
                        </label>
                        <label>
                            <div className="input-group">
                                <span>Produtividade</span>
                                <input type="range" min="1" max="5" step="0.5" name="produtividade" /> {/* Range não tem placeholder */}
                            </div>
                        </label>
                    </div>
                    <div className="form-actions">
                        <button type="button">Cancel</button>
                        <button type="submit">Registrar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CicloRegister;