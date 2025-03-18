const TravelWithUs = () => {
    return (
        <div className='min-h-screen w-full'>
            <div className='flex justify-evenly items-center'>
                <div className='h-screen p-10 flex flex-col gap-20'>
                    <h3 className='text-6xl font-bold'>
                        Date el roce <br /> con nuestra app
                    </h3>
                    <form action="" className='flex flex-col justify-center items-center font-bold gap-10'>
                        <input type="text" className='bg-[#D9D9D9]/70 rounded-3xl py-4 px-6 w-[330px] text-2xl' placeholder="Tú ubicación" />
                        <input type="text" className='bg-[#D9D9D9]/70 rounded-3xl py-4 px-6 w-[330px] text-2xl' placeholder="Destino" />
                        <button className='bg-[#0A7075] text-2xl text-white rounded-full shadow-lg px-6 py-2 mt-10'>
                            Pedir viaje
                        </button>
                    </form>
                </div>
                <div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31734.22973277449!2d-75.6056064!3d6.1603840000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e46822e014a7885%3A0x2d8e9604ee68cb70!2zUGFycXVlIGRlIEl0YWfDvMOt!5e0!3m2!1ses-419!2sco!4v1742329570923!5m2!1ses-419!2sco"
                        width="600"
                        height="450"
                        style={{ border: 'none' }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>

        </div>
    )
}

export default TravelWithUs;