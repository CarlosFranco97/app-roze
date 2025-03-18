import orderRide from '../assets/img/order-ride-bro.png';

const Main = () => {
    return (
        <main className='bg-[#0A7075] min-h-screen w-full flex justify-evenly items-center py-12 px-10'>
        <section className='flex flex-col justify-start items-start gap-6 h-screen'>
            <h2 className='text-white text-9xl font-bold ml-5'>
                Date un roce seguro con la app <span className='italic text-[#031716]'> Roze </span>
            </h2>
            <p className='ml-10 text-[#D9D9D9] font-bold text-2xl'>
                Tú primer viaje totalmente gratis
            </p>
            <button className='bg-white font-bold px-5 py-3 text-2xl rounded-3xl ml-10 w-[320px]'>
                Regístrate para viajar
            </button>
        </section>
        <img src={orderRide} className='w-[520px] h-[520px]' alt='order-ride' />
    </main>  
    )
}

export default Main;