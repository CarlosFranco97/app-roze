import mision from '../../assets/img/follow-the-leader.png';

const AboutUsMision = () => {
    return (
        <div className='min-h-screen w-full py-10'>
            <section className='flex flex-col justify-evenly items-center h-screen'>
                <h2 className='text-6xl italic font-semibold'>
                    Nuestra misión
                </h2>
                <div className='flex justify-around items-center'>
                    <img src={mision} className='w-[500px] h-[500px]' alt="vision" />
                    <p className='text-justify text-2xl opacity-70 font-semibold w-[50%]'>
                        Brindar soluciones de transporte innovadoras y eficientes, conectando a las personas con sus destinos de manera ágil y segura. En Roze, nos comprometemos a ofrecer viajes cortos, con el mejor servicio, donde la tecnología y la atención al cliente se combinan para optimizar cada recorrido.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default AboutUsMision;