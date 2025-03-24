import iconWhatsapp from '../../assets/icon/logo-whatsapp.svg';
import iconInstagram from '../../assets/icon/logo-instagram.svg';

const SocialMediaIcon = () => {
    return (
        <div className='flex items-center'>
            <img src={iconWhatsapp} alt="logo-whatsapp" />
            <img src={iconInstagram} alt="logo-instagram" />
        </div>
    )
}

export default SocialMediaIcon;