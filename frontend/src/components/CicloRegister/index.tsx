import './styles.css';

const CicloRegister = () => {

    return (
        <div className='ciclo-register'>

            <div>

                <form>
                    <h1>Registrar</h1>
                    <span>Insira informações sobre</span>
                    <div className="form-group">
                        <label>
                            <div className="input-group">
                                <span>Data</span>
                                <input type="date" />
                            </div>
                        </label>
                        <label>
                            <div className="input-group">
                                <span>Liquido</span>
                                <input type="number" />
                            </div>
                        </label>
                        <label>
                            <div className="input-group">
                                <span>Pausa</span>
                                <input type="number" />
                            </div>
                        </label>
                    </div>
                    <label>
                        <div className="input-group">
                            <span>Matéria</span>
                            <input type="text" />
                        </div>
                    </label>
                    <label>
                        <div className="input-group">
                            <span>Método de estudo</span>
                            <select name="metodo" id="metodo">
                                <option value="">Video</option>
                                <option value="">Exercícios</option>
                                <option value="">Leitura</option>
                                <option value="">Flashcard</option>
                                <option value="">Simulado</option>
                            </select>
                        </div>
                    </label>
                    <label>
                        <div className="input-group">
                            <span>Tags</span>
                            <select name="tags" id="tags">
                                <option value="">Revisar</option>
                                <option value="">Falta atenção</option>
                                <option value="">Finalizado</option>
                                <option value="">Dúvidas</option>
                                <option value="">Simulado</option>
                            </select>
                        </div>
                    </label>

                    <div className="form-group">
                        <label>
                            <div className="input-group">
                                <span>Exercícios feitos</span>
                                <input type="number" />
                            </div>
                        </label>
                        <label>
                            <div className="input-group">
                                <span>Acertos</span>
                                <input type="number" />
                            </div>
                        </label>
                    </div>

                    <div className="form-group">
                        <label>
                            <div className="input-group">
                                <span>Foco</span>
                                <input type="range" min="1" max="5" step="0.5" />
                            </div>
                        </label>
                        <label>
                            <div className="input-group">
                                <span>Produtividade</span>
                                <input type="range" min="1" max="5" step="0.5" />
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