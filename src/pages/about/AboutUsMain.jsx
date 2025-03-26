const AboutUsMain = () => {
    return (
        <main className='flex justify-center min-h-creen w-full'>
            <div className='flex justify-around items-center h-screen w-full relative'>
                <h1 className='font-bold italic w-[50%] h-screen flex justify-center items-center text-7xl text'>
                    ¿Quiénes somos?
                </h1>
                <hr className='absolute left-1/2 top-1/2 -translate-x-1/2 w-96 transform rotate-90' />
                <div className='w-[50%] h-screen flex justify-center items-center px-5'>
                    <p className='text-justify text-2xl'>
                        <span className='font-bold'>
                            Somo una empresa de transporte
                        </span> para Brindar soluciones de transporte innovadoras y eficientes, conectando a las personas con sus destinos de manera ágil y segura. En <span className='text-[#0A7075] font-black'>Roze</span>, nos comprometemos a ofrecer viajes cortos, con el mejor servicio, donde la tecnología y la atención al cliente se combinan para optimizar cada recorrido
                    </p>
                </div>
            </div>
        </main>
    )
}

export default AboutUsMain;