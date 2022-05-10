import React from 'react';
import { ITarefa } from '../../types/tarefa';
import Botao from '../button';
import style from './form.module.scss';
import { v4 as uuidv4 } from 'uuid';

class Formulario extends React.Component<{
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}> {
    state = {
        tarefa: "",
        tempo: "00:00"
    }

    adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();
        this.props.setTarefas(tarefasAntigas => [...tarefasAntigas, { ...this.state, selecionado: false, completado: false, id: uuidv4()}]);
        this.setState({
            tarefa: "",
            tempo: "00:00"
        })
        this.setState({
            tarefa: "",
            tempo: "00:00"
        })
    }

    render() {
        return (
            <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}> {/* bind porque em class component, as funções não conseguem identificar o que está fora do escopo delas, assim, se usasse um this.state dentro da função, o this seria undefined*/}
                <div className={style.inputContainer}>
                    <label htmlFor='tarefa' >
                        Adicione um novo estudo
                    </label>
                    <input 
                        type="text" 
                        name="tarefa" 
                        id='tarefa' 
                        value={this.state.tarefa}
                        onChange={evento => this.setState({ ...this.state, tarefa: evento.target.value })}
                        placeholder='O que você quer estudar?' 
                        required 
                    />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor='tempo' >
                        Tempo
                    </label>
                    <input 
                        type="time" 
                        step="1" 
                        name="tempo" 
                        value={this.state.tempo} 
                        onChange={evento => this.setState({ ...this.state, tempo: evento.target.value})}
                        id="tempo" 
                        min="00:00:00" 
                        max="01:30:00" 
                        required 
                    />
                </div>
                <Botao
                    texto="Adicionar"
                    type="submit"
                />
            </form>
        )
    }
}

export default Formulario;