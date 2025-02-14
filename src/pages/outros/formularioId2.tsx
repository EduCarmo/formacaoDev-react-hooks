import Pagina from "@/components/template/Pagina";
import InputComId from "@/components/formulario/inputComId";

export default function () {
    return (
        <Pagina titulo="Usando o hook useId em um componente" subtitulo="Resusando um componente com Id">
            <InputComId label="Nome" />
            <InputComId label="Sobrenome" />
        </Pagina>
    )
}