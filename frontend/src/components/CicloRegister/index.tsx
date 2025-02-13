import './styles.css';

const CicloRegister = () => {
    return (
        <div className='ciclo-register'>
            <div className='form-container'>
                <form>
                    <h1>Registrar</h1>
                    <span>Insira informações sobre</span>
                    <div className="form-group">
                        <label>
                            <div className="input-group">
                                <span>Data</span>
                                <input type="date" placeholder="Selecione a data" />
                            </div>
                        </label>
                        <label>
                            <div className="input-group">
                                <span>Liquido</span>
                                <input type="number" placeholder="Digite o valor líquido" />
                            </div>
                        </label>
                        <label>
                            <div className="input-group">
                                <span>Pausa</span>
                                <input type="number" placeholder="Digite o tempo de pausa" />
                            </div>
                        </label>
                    </div>
                    <div className='form-group'>
                        <label>
                            <div className="input-group">
                                <span>Matéria</span>
                                <input type="text" placeholder="Digite a matéria" />
                            </div>
                        </label>
                    </div>
                    <div className='form-group'>
                        <label>
                            <div className="input-group">
                                <span>Método de estudo</span>
                                <select name="metodo" id="metodo">
                                    <option value="" placeholder="Selecione o método">Selecione o método</option> {/* Placeholder no select */}
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
                                    <option value="" placeholder="Selecione a tag">Selecione a tag</option> {/* Placeholder no select */}
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