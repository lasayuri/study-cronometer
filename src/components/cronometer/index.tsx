import { ITarefa } from "../../types/tarefa";
import Botao from "../button";
import { Relogio } from "./clock";
import style from './cronometer.module.scss';
import { tempoParaSegundos } from '../../common/utils/time';
import { useEffect, useState } from "react";

interface Props {
    selecionado: ITarefa | undefined,
    finalizarTarefa: () => void
}

export function Cronometer({ selecionado, finalizarTarefa }: Props) {
    const [tempo, setTempo] = useState<number>();

    // if (selecionado?.tempo) {
    //     setTempo(tempoParaSegundos(selecionado.tempo))
    // } estava dando problema de várias renderizações desnecessárias

    useEffect(() => {
        if (selecionado?.tempo) {
            setTempo(tempoParaSegundos(selecionado.tempo))
        }
    }, [selecionado])

    function regressiva(contador: number = 0 /*para não começar com valor undefined*/) {
        setTimeout(() => {
            if (contador > 0) {
                setTempo(contador - 1);
                return regressiva(contador - 1);
            }
            finalizarTarefa();
        }, 1000);
    }

    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Relogio tempo={tempo} />
            </div>
            <Botao
                texto="Começar!"
                onClick={() => regressiva(tempo)}
            />
        </div>        
    )
}