import DetailsButton from "./DetailsButton"
import travels from '../assets/img/travels.png';
import orderRideShe from '../assets/img/order-ride-she.png';
import shareRide from '../assets/img/share-ride.png';
import bonus from '../assets/img/bonus.png';
const Services = () => {
    const infoCards = [
        {
            title: 'Viaja',
            image: travels,
            alt: 'viaja'
        },
        {
            title: 'Viaje para ellas',
            image: orderRideShe,
            alt: 'viaja-ellas'
        },
        {
            title: 'Viaje compartido',
            image: shareRide,
            alt: 'viaje-compartido'
        },
        {
            title: 'Consulta nuestro bonos',
            image: bonus,
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
                            <div key={index} className='bg-white flex flex-col justify-between items-center gap-2 w-1/5 h-auto py-5 rounded-2xl'>
                                <img src={card.image} className=' h-55 w-[80%]' alt={card.alt} />
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