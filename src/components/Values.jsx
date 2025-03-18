import service from '../assets/img/service.png';
import security from '../assets/img/security.png';
import honesty from '../assets/img/honesty.png';
import comfort from '../assets/img/comfort.png';

const Values = () => {
    return (
        <section className='flex justify-center items-start py-10 min-h-screen w-full bg-[#ECEFF0]'>
            <div className='flex flex-col gap-10'>
                <h2 className='text-center font-black text-6xl'>
                    Nuestros valores
                </h2>
                <div className='grid grid-cols-3 grid-rows-2 gap-5'>
                    <div className='bg-white w-[450px] h-[450px] object-contain col-span-2 row-span-2 rounded-2xl'>
                        <img src={service} alt="service" />
                    </div>
                    <div className='bg-white flex justify-center items-center'>
                        <img src={security} className='w-[160px] h-[160px]' alt="security" />
                    </div>
                    <div className='bg-white w-auto h-auto flex justify-center items-center'>
                        <img src={comfort} className='w-[180px] h-[180px]' alt="comfort" />
                    </div>
                    <div className='col-span-full bg-white flex justify-center items-center'>
                        <img src={honesty} className='w-[280px] ' alt="honesty" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Values;