import { useEffect } from "react";

const HamburguerMenu = ({openMenu, toggleMenu}) => {
    


    return (
        <div className={`${(!openMenu) ? '-top-[900px]' : 'top-0'} fixed transition-all duration-600 ease-in min-h-screen w-full bg-[#031716] px-4`}>
            <div className='h-screen w-full flex flex-col gap-20'>
                <section className='flex justify-between items-center px-5'>
                    <img src="/logo-roze-sin-fondo.svg" alt="logo-roze" />
                    <img src="/close.svg" 
                    onClick={toggleMenu}
                    className='cursor-pointer' alt="close" />
                </section>
                <nav className='text-white text-2xl font-medium flex justify-around items-center p-4 h-auto'>
                    <a href="">Viaja</a>
                    <a href="">Conduce</a>
                    <a href="">¿Quiénes somos?</a>
                    <a href="">Iniciar sesión</a>
                    <a href="" className='bg-[#0A7075] px-4 w-[190px] py-2 rounded-full flex justify-center items-center font-bold'>Registrate</a>
                </nav>
                <hr className='text-white font-black'/>
                <div className='flex flex-col justify-center items-center gap-5'>
                    <h3 className='text-white text-3xl font-black'>Descarga nuestra app</h3>
                    <section className='flex justify-center items-center gap-5'>
                        <img src="/icono-app-store.svg" className='cursor-pointer' alt="" />
                        <img src="/icono-play-store.svg" className='cursor-pointer' alt="" />
                    </section>
                </div>
            </div> 

        </div>
    )
}

export default HamburguerMenu;