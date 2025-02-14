import Titulo from "@/components/template/Titulo";
import {
  IconAppWindow,
  IconArrowLeftRight,
  IconColorSwatch,
  IconDatabase,
  IconDatabaseImport,
  IconDimensions,
  IconForms,
  IconLetterCase,
  IconLock,
  IconMathGreater,
  IconNumbers,
  IconPin,
  IconRefreshAlert,
  IconSection,
  IconShoppingCart,
  IconTextColor,
  IconUsers,
} from "@tabler/icons-react";
import { time } from "console";
import { url } from "inspector";

export const secoes = [
  {
    titulo: "Essenciais",
    aberta: false,
    itens: [
      {
        titulo: "Contador",
        url: "/essenciais/contador",
        tag: "useSate",
        icone: <IconNumbers />,
      },
      {
        titulo: "Votacao",
        url: "/essenciais/votacao",
        tag: "useState",
        icone: <IconUsers />,
      },
      {
        titulo: "Consulta à API",
        url: "/essenciais/consultaApi",
        tag: "useEffect",
        icone: <IconArrowLeftRight />,
      },
      {
        titulo: "Maior",
        url: "/essenciais/maior",
        tag: "useEffect",
        icone: <IconMathGreater />,
      },
      {
        titulo: "Contagem de Caracteres",
        url: "/essenciais/contagemCaracteresEffect",
        tag: "useEffect",
        icone: <IconLetterCase />,
      },
      {
        titulo: "State vs Ref",
        url: "/essenciais/stateVsRef",
        tag: "useRef",
        icone: <IconRefreshAlert />,
      },
      {
        titulo: "Referenciando Elemento",
        url: "/essenciais/refElemento",
        tag: "useRef",
        icone: <IconSection />,
      },
      {
        titulo: "Contagem de Caracteres (Reff)",
        url: "/essenciais/contagemCaracteresReff",
        tag: "useRef",
        icone: <IconLetterCase />,
      },
    ],
  },
  {
    titulo: "Personalizados",
    aberta: false,
    itens: [
      {
        titulo: "modal",
        url: "/personalizados/modal",
        tag: "personalizados",
        icone: <IconAppWindow />,
      },
      {
        titulo: "Tamanho da Janela",
        url: "/personalizados/tamanhoJanela",
        tag: "personalizados",
        icone: <IconDimensions />,
      },
      {
        titulo: "Validando Senha",
        url: "/personalizados/senha",
        tag: "personalizados",
        icone: <IconLock />,
      },
    ],
  },
  {
    titulo: "Contexto",
    aberta: false,
    itens: [
      {
        titulo: "Loja",
        url: "/contexto/loja",
        tag: "useContext",
        icone: <IconShoppingCart />,
      },
    ],
  },
  {
    titulo: "Outros",
    aberta: false,
    itens: [
      {
        titulo: "Memoizando elementos",
        url: "/outros/memoizacao",
        tag: "useMemo",
        icone: <IconPin />,
      },
      {
        titulo: "Memoizando Funções",
        url: "/outros/memoizandoFuncoes",
        tag: "useCallback",
        icone: <IconPin />,
      },
      { 
        titulo: "Formulario 1",
        url: "/outros/formularioImperativeHandle",
        tag: "useImperativeHandle",
        icone: <IconForms />
      },
      {
        titulo: "Formulario 2",
        url: "/outros/texto",
        tag: "useImperativeHandle",
        icone: <IconTextColor />
      },
      {
        titulo: "Gerador de Cor",
        url: "/outros/geradorDeCor",
        tag: "useLayoutEffect",
        icone: <IconColorSwatch />
      },
      {
        titulo: "Soma com useState",
        url: "/outros/somaState",
        tag: "useState",
        icone: <IconDatabase />
      },
      {
        titulo: "Soma com useReducer",
        url: "/outros/somaReduce",
        tag: "useReducer",
        icone: <IconDatabaseImport />
      },
      {
        titulo: "Formulario 1",
        url: "/outros/formularioId1",
        tag: "useId",
        icone: <IconForms />
      },
      {
        titulo: "Formulario 2",
        url: "/outros/formularioId2",
        tag: "useId",
        icone: <IconForms />
      }
    ],
  },
];


export default secoes