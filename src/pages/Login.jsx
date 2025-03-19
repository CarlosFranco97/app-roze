import Header from "../components/Header";

const Login = () => {
    return (
        <section className='flex w-full min-h-screen'>
            <div className='bg-[#031716] min-h-screen w-[50%] flex flex-col justify-center items-center font-bold text-white'>
                <img src="" alt="logo-roze" />
                <div className='flex justify-center items-center'>
                    <img src="" alt="icono" />
                    <p>
                        Volver al menú
                    </p>
                </div>
            </div>
            <div className='w-[50%] flex flex-col justify-center items-center gap-5'>
                <h2 className='font-bold text-2xl'>
                    Iniciar sesión
                </h2>
                <form
                    className='flex flex-col justify-center items-center gap-3'
                    action="">
                    <label   htmlFor="">
                        Ingresa tú número de celular o correo
                    </label>
                    <input type="text" placeholder="Celular o correo" className='bg-[#D9D9D9]/70 rounded-full px-4 py-2 w-[300px]' />
                    <label htmlFor="">
                        Ingresa tu contraseña
                    </label>
                    <input type="password" placeholder="Contraseña" className='bg-[#D9D9D9]/70 rounded-full px-4 py-2 w-[300px]' />
                    <p className='font-bold'>Restablecer contraseña</p>
                    <button className='bg-[#031716] text-white font-bold w-[170px] rounded-2xl p-3'>
                        Iniciar sesión
                    </button>
                    <a href="" className='opacity-50 font-medium'>
                        ¿Aún no tienes cuenta?
                    </a>
                    <button className='bg-[#D9D9D9]/70 p-3 rounded-2xl p-3 w-[280px] font-bold'>
                     Continuar con Google
                    </button>
                    <button className='bg-[#D9D9D9]/70 p-3 rounded-2xl p-3 w-[280px] font-bold'>
                        Continuar con Facebook
                    </button>
                    <div className='flex justify-center items-center'>
                        <img src="" alt="botones-redes" />
                        <img src="" alt="botones-redes" />
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Login;