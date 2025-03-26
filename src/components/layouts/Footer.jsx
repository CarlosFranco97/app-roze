import iconPlayStore from '../../assets/icon/icon-play-store.svg';
import iconAppStore from '../../assets/icon/icon-app-store.svg';
import SocialMediaIcon from '../SocialMediaIcon';

const Footer = () => {
    return (
        <footer className='bg-[#031716] py-4 px-5 text-white flex flex-col gap-10'>
            <img src="/assets/img/logo-roze-without-background.svg" className='w-50 h-50' alt="" />
            <nav className='flex justify-between items-center'>
                <a href="">¿Quiénes somos?</a>
                <a href="">Términos y condiciones</a>
                <a href="">Viajes</a>
            </nav>
            <hr />
            <div className='flex justify-center items-center gap-5'>
                <img src={iconAppStore} className='cursor-pointer' alt="logo-app-store" />
                <img src={iconPlayStore} className='cursor-pointer' alt="logo-play-store" />
            </div>
            <div className='flex justify-between items-center'>
               <SocialMediaIcon />
                <p>
                 &#169; 2025 - Roze Inc
                </p>
                <p>
                    Español - LATAM
                </p>
            </div>
        </footer>
    )
}

export default Footer;