import { createContext, useState } from 'react'
import { categorias as categoriasDB } from '../data/categorias'
import { toast } from 'react-toastify'


const QuioscoContext = createContext()
const QuioscoProvider = ( {children} ) => {
    const [ categorias, setCategorias ] = useState(categoriasDB)
    const [ categoriaActual, setCategoriaActual ] = useState(categorias[0])
    const [ modal, setModal ] = useState(false)
    const [ producto, setProducto ] = useState({})
    const [ pedido, setPedido ] = useState([])


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

    const handleAgregarPedido = ({categoria_id, imagen, ...producto}) => {
        if( pedido.some( productoPedido => productoPedido.id === producto.id) ) {
            const arregloProductos = pedido.map( productoPedido => productoPedido.id === producto.id ? producto : productoPedido )
            setPedido(arregloProductos)
            toast.success('Guardado correctamente')
        }else {
            setPedido([...pedido, producto])
            toast.success('Producto agregado al pedido')
        }
    }

    return (
        <QuioscoContext.Provider
            value={{
                categorias,
                categoriaActual,
                modal,
                producto,
                pedido,
                handleClickCategoria,
                handleClickModal,
                handleSetProducto,
                handleAgregarPedido
            }}
        >
            {children}
        </QuioscoContext.Provider>
    )
}

export default QuioscoProvider

export { QuioscoContext }

