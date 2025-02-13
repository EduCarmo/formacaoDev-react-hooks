import Botao from "@/components/template/Botao";
import Display from "@/components/template/Display";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import useBoolean from "@/data/hooks/useBoolean";
import { useLayoutEffect, useRef, useState } from "react";

export default function GeradorDeCor() {
  // 1 - Mostrar a div condicionalmente, a div deve aparecer quando clicar em sortear cor e desaparecer quando clicar em apagar cor

  // 2 - Exibir um texto no nosso display: "Clique em sortear", "Exibir uma cor aleatoria"

  // 3 - Alterar a cor da div de acordo com a cor aleatoria generada

  const [mostrar, toggleMostrar, mostrarTrue, mostrarFalse] = useBoolean();
  const [texto, setTexto] = useState("Clique em sortear");
  const ref = useRef<HTMLDivElement | null>(null);

  function gerarCorAleatoria() {
    const numeroAleatorioHexadecimal = Math.floor(Math.random() * 0xffffff);
    const cor = numeroAleatorioHexadecimal.toString(16).padStart(6, "0");
    return `#${cor}`;
  }

  useLayoutEffect(() => {
    if (mostrar && ref.current) {
        const cor = gerarCorAleatoria();
        setTexto(cor);
        ref.current.style.backgroundColor = cor
    }else {
        setTexto("Clique em sortear")
    }
  }, [mostrar]);
  

  return (
    <Pagina
      titulo="Gerador de Cor"
      subtitulo="Criando exemplos mais complexos com use LayoutEffect"
    >
      <Flex>
        <Botao texto="Sortear Cor" onClick={toggleMostrar}/>
        <Botao texto="Apagar Cor" onClick={mostrarFalse}/>
      </Flex>
      <Display texto={texto}/>
      {mostrar && <div ref={ref} className="h-32 w-32" />}
    </Pagina>
  );
}
