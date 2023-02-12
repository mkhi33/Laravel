import { createContext, useEffect, useState } from 'react'
import { categorias as categoriasDB } from '../data/categorias'
import { toast } from 'react-toastify'


const QuioscoContext = createContext()
const QuioscoProvider = ( {children} ) => {
    const [ categorias, setCategorias ] = useState(categoriasDB)
    const [ categoriaActual, setCategoriaActual ] = useState(categorias[0])
    const [ modal, setModal ] = useState(false)
    const [ producto, setProducto ] = useState({})
    const [ pedido, setPedido ] = useState([])
    const [ total, setTotal ] = useState(0)

    useEffect( () => {
        const total = pedido.reduce( (acumulador, producto) => acumulador + producto.precio * producto.cantidad, 0)
        setTotal(total)
    }, [ pedido ] )

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

    const handleAgregarPedido = ({categoria_id, ...producto}) => {
        if( pedido.some( productoPedido => productoPedido.id === producto.id) ) {
            const arregloProductos = pedido.map( productoPedido => productoPedido.id === producto.id ? producto : productoPedido )
            setPedido(arregloProductos)
            toast.success('Guardado correctamente')
        }else {
            setPedido([...pedido, producto])
            toast.success('Producto agregado al pedido')
        }
    }

    const handleEliminarProductoPedido = id => {
        const arregloProductos = pedido.filter( productoPedido => productoPedido.id !== id )
        setPedido(arregloProductos)
        toast.success('Producto eliminado del pedido')
    }

    const handleEditarCantidad = (id ) => {
        const productoActualizar = pedido.find( productoPedido => productoPedido.id === id )
        setProducto(productoActualizar)
        setModal(!modal)
    }

    return (
        <QuioscoContext.Provider
            value={{
                categorias,
                categoriaActual,
                modal,
                producto,
                pedido,
                total,
                handleClickCategoria,
                handleClickModal,
                handleSetProducto,
                handleAgregarPedido,
                handleEditarCantidad,
                handleEliminarProductoPedido
            }}
        >
            {children}
        </QuioscoContext.Provider>
    )
}

export default QuioscoProvider

export { QuioscoContext }

