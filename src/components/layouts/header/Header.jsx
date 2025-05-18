import { useState } from "react";
import worldIcon from '../../../assets/icon/world-icon.svg';
import hamburguerIcon from '../../../assets/icon/hamburguer-icon.svg';
import HamburguerMenu from "./HamburguerMenu";
import { Link } from "react-router-dom";


const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const toggleMenu = () => setOpenMenu((prev) => !prev);
    
    return (
        <>
            <header className={`flex justify-between items-center w-full h-[150px] p-4 bg-[#031716] text-white`}>
                <Link to='/'>
                    <img src='assets/img/logo-roze-without-background.svg' className='cursor-pointer' alt="logo-roze" />
                </Link>
                <div className='flex justify-evenly items-center gap-8'>
                    <button className='bg-white text-black py-2 px-5 rounded-full font-semibold cursor-pointer'>
                        Descarga la app
                    </button>
                    <div className='flex justify-center items-center gap-1 cursor-pointer'>
                        <img src={worldIcon} alt="world" />
                        <p className='font-semibold'>ES</p>                                                          
                    </div>
                    <img src={hamburguerIcon} className='cursor-pointer' alt="hamburguer-icon" onClick={toggleMenu}/>
                </div>
            </header> 
            <HamburguerMenu openMenu={openMenu} toggleMenu={toggleMenu} />       
        </>
    )
}

export default Header;