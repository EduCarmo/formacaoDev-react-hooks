import InputFormatado from "@/components/template/InputFormatado";
import Pagina from "@/components/template/Pagina";
import useStateValidado from "@/data/hooks/useStateValidado";

export default function Senha() {

    function validaSenha(senha: string) {
        return senha.length >= 8; // A senha deve ter pelo menos 8 caracteres
    }

    const [senha, setSenha, senhaEhValida] = useStateValidado("", validaSenha);

    let borda = "border-none";
    if (senha !== "") {
        borda = senhaEhValida ? "border-green-600" : "border-red-600";
    }

    return (
        <Pagina titulo="Validando Senha" subtitulo="Usando um hook personalizado para validar uma senha">
            <InputFormatado
                label="Senha"
                tipo="text"
                className={`${borda} border-4 w-100 flex`}
                valor={senha}
                onInput={(e) => setSenha(e.target.value)}
            />
        </Pagina>
    );
}
