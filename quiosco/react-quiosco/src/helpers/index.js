const formatearDinero = (cantidad) => {
    return new Intl.NumberFormat('es-HN', {
        style: 'currency',
        currency: 'HNL',
        minimumFractionDigits: 2,
    }).format(cantidad);
}



export { formatearDinero };