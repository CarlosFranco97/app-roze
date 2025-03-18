import carDriving from '../assets/img/car-driving.png';
const StartDriving = () => {
    return (
        <section className='w-full min-h-screen flex justify-evenly items-center'>
            <img
                className='w-[520px] h-[520px]'
                src={carDriving}
                alt="car-driving" />
            <div className='flex flex-col text-center justify-center items-center gap-5 w-[40%]'>
                <h2 className='text-[#031716] text-7xl font-bold'>
                    Maneja y gana a tu manera
                </h2>
                <p className='text-[#0A7075] font-bold text-2xl'>
                    Recibe bonos por fidelidad
                </p>
                <button className='text-[#0A7075] text-white text-center font-bold bg-[#031716] w-[330px] px-5 py-3 text-2xl rounded-3xl cursor-pointer'>
                    Registrate para manejar
                </button>
            </div>
        </section>
    )
}

export default StartDriving;