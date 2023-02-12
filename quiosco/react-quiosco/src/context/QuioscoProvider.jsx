import { createContext, useState } from 'react'
import { categorias as categoriasDB } from '../data/categorias'


const QuioscoContext = createContext()
const QuioscoProvider = ( {children} ) => {
    const [ categorias, setCategorias ] = useState(categoriasDB)
    const [ categoriaActual, setCategoriaActual ] = useState(categorias[0])
    const [ modal, setModal ] = useState(false)
    const [ producto, setProducto ] = useState({})


    const handleClickCategoria = id => {

        const categoria = categorias.find( categoria => categoria.id === id )

        setCategoriaActual(categoria)
    }

    const handleClickModal = () => {
        setModal(!modal)
    }

    const handleSetProducto = producto => {
        setProducto(producto)
    }

    return (
        <QuioscoContext.Provider
            value={{
                categorias,
                categoriaActual,
                modal,
                producto,
                handleClickCategoria,
                handleClickModal,
                handleSetProducto
            }}
        >
            {children}
        </QuioscoContext.Provider>
    )
}

export default QuioscoProvider

export { QuioscoContext }
