import { useState } from "react";

export default function useStateValidado(
    valorInicial: string, 
    funcaoValidacao: (valor: string) => boolean
): [string, (novoValor: string) => void, boolean] {
    const [valor, setValor] = useState(valorInicial);
    const [validado, setValidado] = useState(false);

    function setValorValidado(novoValor: string) {
        setValor(novoValor);
        setValidado(funcaoValidacao(novoValor));
    }

    return [valor, setValorValidado, validado];
}
