const DownloadApp = () => {
    return (
        <div className='h-[450px] w-full flex justify-center items-center'>
            <div className='flex flex-col gap-20 w-full'>
                <h3 className='text-6xl italic font-black w-1/2 ml-20'>
                    Descarga nuestra app y únete a <span className='text-[#0A7075]'>Roze</span> ahora
                </h3>
                <div className='flex justify-center items-center'>
                    <img src="/icono-app-store.svg" className='cursor-pointer' alt="app-store" />
                    <img src="/icono-play-store.svg" className='cursor-pointer' alt="play-store" />
                </div>
            </div>
        </div>
    )
}

export default DownloadApp;