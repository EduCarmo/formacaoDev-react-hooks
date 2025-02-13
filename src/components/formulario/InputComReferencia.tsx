import { forwardRef, useImperativeHandle, useRef } from "react";

interface InputFormatadoProps {
    label?: string;
    tipo: string;
    className?: string;
}

function InputComReferencia(props: InputFormatadoProps, ref: React.Ref<any>) { 
    const referenciaInterna = useRef<HTMLInputElement>(null); 

    function novasFuncionalidades() {
        return {
            apagar: function () {
                if (referenciaInterna.current) {
                    referenciaInterna.current.value = referenciaInterna.current.value.slice(0, -1);
                }
            },
            textoPadrao: function () {
                if (referenciaInterna.current) {
                    referenciaInterna.current.value = "Padrao!";
                }
            }
        };
    }

    useImperativeHandle(ref, novasFuncionalidades);

    return (
        <>
            {props.label && <label className="m-1">{props.label}</label>}
            <input
                ref={referenciaInterna}
                type={props.tipo}
                className={`
                    text-gray-600 px-2 
                    w-40 h-11 rounded-md
                    ${props.className ?? ""}
                `}
            />
        </>
    );
}

export default forwardRef(InputComReferencia);
