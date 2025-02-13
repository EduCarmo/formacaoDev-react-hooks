import InputFormatado from "@/components/formulario/InputFormatado";
import BotaoMemoizado from "@/components/template/BotaoMemoizado";
import Display from "@/components/template/Display";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import { useCallback, useState } from "react";

export default function MemoizandoFuncoes() {
  const [quantidade, setQuantidade] = useState(0);

  const finalizar = useCallback(function (e: any) {
    e.preventDefault();
    window.alert("Compra finalizada");
    setQuantidade(0);
  }, []);

  return (
    <Pagina titulo="Memoizando Funções" subtitulo="Entendo o hook useCallback">
      <Display texto="Quando protdutos você quer?" />
      <form>
        <Flex col center>
          <InputFormatado
            valor={quantidade}
            tipo="number"
            onInput={(e) => setQuantidade(+e.target.value)}
          ></InputFormatado>
          <BotaoMemoizado texto="Confirmar" onClick={finalizar} />
        </Flex>
      </form>
    </Pagina>
  );
}
