import vision from '../../assets/img/finding-brilliant-ideas.png';

const AboutUsVision = () => {
    return (
        <section className='w-full min-h-screen bg-[#D9D9D9]/50 py-10'>
            <div className='flex flex-col justify-evenly items-center h-screen'>
                <h2 className='text-6xl italic font-semibold'>
                    Nuestra visión
                </h2>
                <div className='flex justify-around items-center w-full px-5'>
                    <p className='text-justify opacity-70 font-semibold text-2xl w-[50%]'>
                        Ser la plataforma de movilidad líder en Colombia, ofreciendo experiencias de viajes rápidas, seguras y accesibles para todos, transformando cada trayecto en un momento cómodo y agradable para nuestros usuarios.
                    </p>
                    <img src={vision} className='w-[500px] h-[500px]' alt="vision" />
                </div>
            </div>
        </section>
    )
}

export default AboutUsVision;