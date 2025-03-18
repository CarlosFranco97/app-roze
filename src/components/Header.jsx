import logoRoze from '../assets/img/logo-roze-sin-fondo.png';
const Header = () => {
    return (
        <header className='flex justify-between items-center min-w-full w-full h-auto p-4 bg-[#031716] text-white'>
            <img src={logoRoze} alt="logo-roze" />
            <div className='flex justify-evenly items-center gap-5'>
                <button className='bg-white text-black py-2 px-5 rounded-full font-bold'>
                    Descarga la app
                </button>
                <div className='flex justify-center items-center gap-1'>
                    <img src="" alt="logo-world" />
                    <p>ES</p>                                                          
                </div>
                <div>
                    <p>Boton hamburguesa</p>
                </div>
            </div>
        </header>
    )
}

export default Header;