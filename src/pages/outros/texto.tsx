import Pagina from "@/components/template/Pagina";
import { useLayoutEffect, useState } from "react";

export default function () {

  const [texto, setTexto] = useState("Um texto secreto !!!!!!!!!!!!!!!!!");

  useLayoutEffect(() => {
    setTexto("Olá!")
  }, [])

  return (
    <Pagina titulo="Secreto" subtitulo="Entendo um problema do useEfect">
      <p className="text-5xl text-gray-300">{texto}</p>
    </Pagina>
  );
}
