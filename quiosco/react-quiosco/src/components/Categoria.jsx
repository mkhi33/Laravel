import useQuiosco from "../hooks/useQuiosco"


const Categoria = ({categoria}) => {
    const { icono, nombre, id  } = categoria
    const { categoriaActual, handleClickCategoria } = useQuiosco()
  return (
    <button type="button" onClick={ () => handleClickCategoria(id)} className={`flex items-center gap-4 border w-full p-3 ${categoriaActual.id === id ? 'bg-amber-400' : 'bg-white'} hover:bg-amber-400 cursor-pointer`}>
        <img className="w-12" src={`/img/icono_${icono}.svg`} alt={`Imagen ${nombre}`}/>   
        <p className="text-lg font-bold cursor-pointer truncate">{nombre}</p> 
    </button>
  )
}

export default Categoria