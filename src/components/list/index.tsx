import { ITarefa } from '../../types/tarefa';
import Item from './item';
import style from './list.module.scss';

interface Props {
    tarefas: ITarefa[],
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

//function component, diferente dos class component que usam React.component (como o caso do componente de form)
function Lista({ tarefas, selecionaTarefa }: Props) {

    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map(item => (
                    // <li key={index} className={style.item}>
                    //     <h3>{item.tarefa}</h3>
                    //     <span>{item.tempo}</span>
                    // </li>
                    <Item 
                        // tarefa={item.tarefa}
                        // tempo={item.tempo}
                        //igual a:
                        selecionaTarefa={selecionaTarefa}
                        key={item.id}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default Lista;