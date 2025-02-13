import './styles.css';
import React, { FC, FormEvent } from 'react';
import { NovoRegistro } from '../CicloTable/novoRegistro';

type CicloRegisterProps = {
    isOpen: boolean;
    onClose: () => void;
    onItemAdd: (novoRegistro: NovoRegistro) => void;
}

export const CicloRegister: FC<CicloRegisterProps> = ({ isOpen, onClose, onItemAdd }) => {
    if (!isOpen) {
        return null;
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    
        const form = event.target as HTMLFormElement;

        const novoRegistro: NovoRegistro = {
            id: Math.random(),
            materia: form.materia.value,
            horasPausa: form.horasPausa.value,
            horasFeitas: form.horasFeitas.value,
            progresso: 0,
            tags: form.tags.value
        };


        onItemAdd(novoRegistro);
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
                                <input type="date" placeholder="Selecione a data" name="date"/>
                            </div>
                        </label>
                        <label>
                            <div className="input-group">
                                <span>Liquido</span>
                                <input type="number" placeholder="Digite o valor líquido" name="horasFeitas"/>
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
                                <select name="metodo" id="metodo">
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
                                <input type="number" placeholder="Digite o número de exercícios" />
                            </div>
                        </label>
                        <label>
                            <div className="input-group">
                                <span>Acertos</span>
                                <input type="number" placeholder="Digite o número de acertos" />
                            </div>
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            <div className="input-group">
                                <span>Foco</span>
                                <input type="range" min="1" max="5" step="0.5" /> {/* Range não tem placeholder */}
                            </div>
                        </label>
                        <label>
                            <div className="input-group">
                                <span>Produtividade</span>
                                <input type="range" min="1" max="5" step="0.5" /> {/* Range não tem placeholder */}
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