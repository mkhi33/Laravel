import useQuiosco from '../hooks/useQuiosco'
import Categoria from './Categoria'
const Sidebar = () => {
    const { categorias } = useQuiosco()
  return (
    <aside className="md:w-72">
        <div className="p-4">
            <img className="w-40" src="img/logo.svg" />
        </div>
        <div className="mt-10">
            {categorias.map( categoria => (
                <Categoria key={categoria.id} categoria={categoria} />
            ))}
        </div>
        <div className='my-1 py-3'>
            <button
                type='button'
                className='text-center bg-red-500 w-full p-3 font-bold truncate'
            >Cancelar Orden</button>
        </div>
    </aside>
  )
}

export default Sidebar