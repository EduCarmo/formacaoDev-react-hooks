import InputFormatado from "@/components/formulario/InputFormatado";
import Botao from "@/components/template/Botao";
import Display from "@/components/template/Display";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import { Reducer, use, useEffect, useReducer, useState } from "react";

function mudaDados(estadoAtual, acao) {
    switch (acao.type) {
        case "ALTERA_N1":
            return {
                ...estadoAtual,
                n1: acao.novoValor,
                validadeN1: acao.novoValor > 0,
            }
        case "ALTERA_N2":
            return {
                ...estadoAtual,
                n2: acao.novoValor,
                validadeN2: acao.novoValor > 0
            }
        case "SOMA":
            if (estadoAtual.validadeN1 && estadoAtual.validadeN2) {
                return {
                    ...estadoAtual,
                    total: estadoAtual.n1 + estadoAtual.n2
                }
            }else {
                return {
                    ...estadoAtual,
                    total: -9999
                }
            }
    }
}

export default function () {

    const [dados, dispatchDados] = useReducer<Reducer<any, any>>(mudaDados, {
        n1: 0,
        n2: 0,
        validadeN1: false,
        validadeN2: false,
        total: 0
    })


    return (
        <Pagina titulo="Soma com useReducer" subtitulo="Exemplo de soma com useState">
            <Flex col centerCross>
                <Display texto="Faça uma soma" />
                <Flex center>
                    <InputFormatado tipo="number" valor={dados.n1} onInput={(e) => { dispatchDados({ type: "ALTERA_N1", novoValor: +e.target.value }) }} />
                    <span className="text-4xl ml-5">+</span>
                    <InputFormatado tipo="number" valor={dados.n2} onInput={(e) => { dispatchDados({ type: "ALTERA_N2", novoValor: +e.target.value }) }} />
                    <Botao cor="bg-orange-400" texto="=" onClick={() => dispatchDados({ type: "SOMA" })} />
                </Flex>
                <Display texto={dados.total} />
            </Flex>
        </Pagina>
    )
}