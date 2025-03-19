const Header = () => {
    return (
        <header className='flex justify-between items-center w-full h-[150px] p-4 bg-[#031716] text-white'>
            <img src="/logo-roze-sin-fondo.svg" className='cursor-pointer' alt="logo-roze" />
            <div className='flex justify-evenly items-center gap-8'>
                <button className='bg-white text-black py-2 px-5 rounded-full font-semibold cursor-pointer'>
                    Descarga la app
                </button>
                <div className='flex justify-center items-center gap-1 cursor-pointer'>
                    <img src="/world.svg" alt="world" />
                    <p className='font-semibold'>ES</p>                                                          
                </div>
                <img src="/hamburguer.svg" className='cursor-pointer' alt="" />
            </div>
        </header>
    )
}

export default Header;