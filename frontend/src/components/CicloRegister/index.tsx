import './styles.css';

const CicloRegister = () => {

    return (
        <div className=''>

            <div>

                <form>
                    <h1>Registrar</h1>
                    <span>Insira informações sobre</span>
                    <label>
                        Data
                        <input type="date" />
                    </label>
                    <label htmlFor="">
                        Liquido
                        <input type="number" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Pausa
                        <input type="number" name="" id="" />
                    </label>
                    <label>
                        Matéria
                        <input type="text" />
                    </label>
                    <label>
                        Método de estudo
                        <select name="metodo" id="metodo">
                            <option value="">Video</option>
                            <option value="">Exercícios</option>
                            <option value="">Leitura</option>
                            <option value="">Flashcard</option>
                            <option value="">Simulado</option>
                        </select>
                    </label>
                    <label >
                        Tags
                        <select name="tags" id="tags">
                            <option value="">Revisar</option>
                            <option value="">Falta atenção</option>
                            <option value="">Finalizado</option>
                            <option value="">Dúvidas</option>
                            <option value="">Simulado</option>
                        </select>
                    </label>

                    <label htmlFor="">
                        Exercícios feitos
                        <input type="number" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Acertos
                        <input type="number" name="" id="" />
                    </label>

                    <label htmlFor="">
                        Foco
                        <input type="range" min="1" max="5" step="0.5" />
                    </label>
                    <label htmlFor="">
                        Produtividade
                        <input type="range" min="1" max="5" step="0.5" />
                    </label>

                    <button type="submit">Registrar</button>
                    <button >Cancel</button>
                </form>
            </div>
        </div>
    );
};

export default CicloRegister;