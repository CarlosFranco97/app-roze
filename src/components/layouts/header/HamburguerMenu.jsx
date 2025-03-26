import closeIcon from '../../../assets/icon/close-icon.svg';
import iconPlayStore from '../../../assets/icon/icon-play-store.svg'
import iconAppStore from '../../../assets/icon/icon-app-store.svg'

const HamburguerMenu = ({openMenu, toggleMenu}) => {
    


    return (
        <div className={`${(!openMenu) ? '-top-[1200px]' : 'top-0'} fixed z-50 transition-all duration-800 ease-in-out min-h-screen w-full bg-[#031716] px-4`}>
            <div className='h-screen w-full flex flex-col gap-20'>
                <section className='flex justify-between items-center px-5'>
                    <img src="assets/img/logo-roze-without-background.svg" alt="logo-roze" />
                    <img src={closeIcon} 
                    onClick={toggleMenu}
                    className='cursor-pointer' alt="close" />
                </section>
                <nav className='text-white text-2xl font-medium flex justify-around items-center p-4 h-auto'>
                    <a className='hover:bg-white/20 rounded-4xl py-3 px-4 transition-all ease-in-out duration-500' 
                    href="">Viaja</a>
                    <a className='hover:bg-white/20 rounded-4xl py-3 px-4 transition-all ease-in-out duration-500' 
                    href="">Conduce</a>
                    <a className='hover:bg-white/20 rounded-4xl py-3 px-4 transition-all ease-in-out duration-500'
                    href="">¿Quiénes somos?</a>
                    <a className='hover:bg-white/20 rounded-4xl py-3 px-4 transition-all ease-in-out duration-500' 
                    href="">Iniciar sesión</a>
                    <a href="" className='bg-[#0A7075] w-[190px] px-4 py-2 rounded-full flex justify-center items-center font-bold'>Registrate</a>
                </nav>
                <hr className='text-white font-black'/>
                <div className='flex flex-col justify-center items-center gap-5'>
                    <h3 className='text-white text-3xl font-black'>Descarga nuestra app</h3>
                    <section className='flex justify-center items-center gap-5'>
                        <img src={iconAppStore} className='cursor-pointer' alt="" />
                        <img src={iconPlayStore} className='cursor-pointer' alt="" />
                    </section>
                </div>
            </div> 

        </div>
    )
}

export default HamburguerMenu;