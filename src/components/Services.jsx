import DetailsButton from "./DetailsButton"

const Services = () => {
    const infoCards = [
        {
            title: 'Viaja',
            image: 'image',
            alt: 'viaja'
        },
        {
            title: 'Viaje para ellas',
            image: '',
            alt: 'viaja-ellas'
        },
        {
            title: 'Viaje compartido',
            image: '',
            alt: 'viaje-compartido'
        },
        {
            title: 'Consulta nuestro bonos',
            image: '',
            alt: 'bonos'
        }
    ]
    return (
        <section className='bg-[#ECEFF0] min-h-screen w-full p-10 flex flex-col gap-20'>
            <h3 className='text-6xl font-black italic'>Los servicios que te ofrecemos</h3>
            <div className='w-full flex justify-center items-center gap-10'>

                {
                    infoCards.map((card, index) => {
                        return (
                            <div key={index} className='bg-white flex flex-col justify-center items-center gap-5 w-1/5 h-[280px] rounded-2xl'>
                                <img src={card.image} alt={card.alt} />
                                <p>{card.title}</p>
                                <DetailsButton />
                            </div>
                        )

                    })
                }

            </div>
        </section>
    )
}

export default Services;