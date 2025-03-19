const Footer = () => {
    return (
        <footer className='bg-[#031716] py-4 px-5 text-white flex flex-col gap-10'>
            <img src="/logo-roze-sin-fondo.svg" className='w-50 h-50' alt="" />
            <nav className='flex justify-between items-center'>
                <a href="">¿Quiénes somos?</a>
                <a href="">Términos y condiciones</a>
                <a href="">Viajes</a>
            </nav>
            <hr />
            <div className='flex justify-center items-center gap-5'>
                <img src="/icono-app-store.svg" className='cursor-pointer' alt="logo-app-store" />
                <img src="/icono-play-store.svg" className='cursor-pointer' alt="logo-play-store" />
            </div>
            <div className='flex justify-between items-center'>
                <div className='flex items-center'>
                    <img src="logo-whatsapp.svg" alt="logo" />
                    <img src="logo-instagram.svg" alt="logo" />
                </div>
                <p>
                    2025 - Roze Inc
                </p>
                <p>
                    Español - LATAM
                </p>
            </div>
        </footer>
    )
}

export default Footer;