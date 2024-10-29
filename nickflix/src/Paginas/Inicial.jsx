import { Cabecalho } from '../Componentes/Cabecalho'
import { BarraNavegacao } from '../Componentes/BarraNavegacao'
import { Conteudo } from '../Componentes/Conteudo'

export function Inicial(){
    return (
    <div className='flex bg-black text-white h-full'>
      <BarraNavegacao />
      <div className='ml-[160px]'>
        <Cabecalho />
        <Conteudo />
      </div>
    </div>
  )
} 

export default Inicial
