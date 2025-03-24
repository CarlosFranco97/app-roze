import arrowIcon from '../../assets/icon/arrow.svg';
import googleIcon from '../../assets/icon/google.svg';
import facebookIcon from '../../assets/icon/facebook.svg';
import SocialMediaIcon from '../../components/common/SocialMediaIcon';

const Login = () => {
    return (
        <section className='flex w-full min-h-screen'>
            <div className='bg-[#031716] min-h-screen w-[50%] flex flex-col justify-center items-center gap-1 font-bold text-white'>
                <img src="/assets/img/logo-roze-without-background.svg" alt="logo-roze" />
                <div className='flex justify-center items-center gap-3 cursor-pointer'>
                    <img src={arrowIcon} className='w-6 h-6' alt="icono-flecha" />
                    <p>
                        Volver al menú anterior
                    </p>
                </div>
            </div>
            <div className='w-[50%] flex flex-col justify-center items-center gap-5'>
                <h2 className='font-black text-[#031716] text-4xl'>
                    Iniciar sesión
                </h2>
                <form
                    className='flex flex-col justify-center items-center gap-3 font-bold'
                    action="">
                    <label className='text-left w-full ml-6' htmlFor="">
                        Ingresa tú número de celular o correo
                    </label>
                    <input type="text" placeholder="Celular o correo" className='bg-[#D9D9D9]/70 rounded-full  px-5 py-3 w-[320px] placeholder:text-[#031716]/50' />
                    <label className='text-left w-full ml-6' htmlFor="">
                        Ingresa tu contraseña
                    </label>
                    <input type="password" placeholder="Contraseña" className='bg-[#D9D9D9]/70 rounded-full  px-5 py-3 w-[320px] placeholder:text-[#031716]/50' />
                    <p>Restablecer contraseña</p>
                    <button className='bg-[#031716] text-white text-xl w-[170px] rounded-2xl p-3 cursor-pointer'>
                        Iniciar sesión
                    </button>
                    <a href="" className='opacity-50'>
                        ¿Aún no tienes cuenta?
                    </a>
                    <button className='flex justify-center items-center gap-3 bg-[#D9D9D9]/70 p-3 rounded-2xl p-3 w-[280px] font-bold cursor-pointer'>
                        <img src={googleIcon} className='w-6 h-6' alt="logo-google" />
                        Continuar con Google
                    </button>
                    <button className='flex justify-center items-center gap-3 bg-[#D9D9D9]/70 p-3 rounded-2xl p-3 w-[280px] font-bold cursor-pointer'>
                        <img src={facebookIcon} className='w-6 h-6 rounded-[2px]' alt="" />
                        Continuar con Facebook
                    </button>
                    <div className='mt-4'>
                        <SocialMediaIcon />
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Login;