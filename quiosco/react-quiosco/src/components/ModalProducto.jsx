import { useState } from "react";
import { formatearDinero } from "../helpers";
import useQuiosco from "../hooks/useQuiosco";


const ModalProducto = () => {
    const { producto, handleClickModal } = useQuiosco()
    const [ cantidad, setCantidad ] = useState(1)

    const handleClick = value => {
        const nuevaCAntidad = cantidad + value
        if ( ( nuevaCAntidad) > 0 && nuevaCAntidad <= 5 ) {
            setCantidad(cantidad + value)
        }
    }
    return (
        <div className="md:flex gap-10">
            <div className="md:w-1/3">
                <img src={`/img/${producto.imagen}.jpg`} alt={`Imagen ${producto.nombre}`}/>
            </div>
            <div className="md:w-2/3">
                <div className="flex justify-end">
                    <button type="button" onClick={handleClickModal}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                </div>
                <h1 className="text-3xl font-bold mt-5">{producto.nombre}</h1>
                <p className="mt-5 font-black text-5xl text-amber-500">{formatearDinero(producto.precio)}</p>
                <div className="flex gap-4 mt-5">
                    <button onClick={ () => handleClick(-1) } type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                    <p className="text-3xl">{cantidad}</p>
                    <button onClick={ () => handleClick(1) } type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                </div>
                
                <button type="button" className="bg-indigo-600 hover:bg-indigo-800 px-5 py-2 mt-5 text-white font-bold uppercase rounded">Añadir al pedido</button>
            </div>
        </div>
    );
}

export default ModalProducto;