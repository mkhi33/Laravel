
const Login = () => {
  return (
    <>
      <h1 className='text-4xl font-black'>Iniciar Sesión</h1>
      <p>Para crear un pedido debes iniciar sesión</p>

      <div className='bg-white shadow-md rounded-md mt-10 px-5 py-10'>
        <form>
          <div className='mb-4'>
            <label className='text-slate-800' htmlFor='email'>Email:</label>
            <input 
              className='mt-2 w-full block p-3 bg-gray-50'
              type='email'
              id='email'
              name='email'
              placeholder='Ingresa tu correo electrónico'
            />
          </div>
          <div className='mb-4'>
            <label className='text-slate-800' htmlFor='password'>Password:</label>
            <input 
              className='mt-2 w-full block p-3 bg-gray-50'
              type='password'
              id='password'
              name='password'
              placeholder='Ingresa tu contraseña'
            />
          </div>

          <input
            type='submit'
            className='bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer'
            value='Iniciar Sesión'
          />
        </form>
      </div>
    </>
  )
}

export default Login