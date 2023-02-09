import { Outlet } from "react-router-dom"

const AuthLayout = () => {
  return (
    <main className="max-w-4xl mx-auto mt-5 md:mt-10 flex flex-col md:flex-row items-center">
      <img className="max-w-xs" src="../public/img/logo.svg" alt="Imagen logotipo" />
      <div className="p-2 w-full">
        <Outlet />
      </div>
    </main>
  )
}

export default AuthLayout