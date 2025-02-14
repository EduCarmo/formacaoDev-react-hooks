import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import { useId } from "react";

export default function () {

    let id = useId();

    return (
        <Pagina titulo="Conhecendo o hook id" subtitulo="Usando o UseId em um formulario">
            <Flex center>
                <label className="mt-1" htmlFor={`nome-${id}`}>Nome</label>
                <input id={`nome-${id}`} className="m-2 text-gray-600 rounded-md" type="text" />
            </Flex>
            <Flex center>
                <label className="mt-4" htmlFor={`sobrenome-${id}`}>Sobrenome</label>
                <input id={`sobrenome-${id}`} className="m-2 text-gray-600 rounded-md" type="text" />
            </Flex>
        </Pagina>
    )
}