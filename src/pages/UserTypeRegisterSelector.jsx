import arrowIcon from "../assets/icon/arrow.svg";
import arrowExtendedIcon from "../assets/icon/extended-arrow.svg";
import { Link } from "react-router-dom";

const UserTypeRegisterSelector = () => {
  return (
    <section className="bg-[#031716] min-h-screen w-full">
      <div className="relative text-white h-screen w-full flex justify-around items-center font-bold text-white">
        <div className="h-screen flex flex-col items-center justify-center w-[50%]">
          <img
            className="cursor-pointer"
            src="/assets/img/logo-roze-without-background.svg"
            alt="logo-roze"
          />
          <Link
            to="/"
            className="flex items-center items-center gap-2 cursor-pointer"
          >
            <img src={arrowIcon} className="w-6 h-6" alt="" />
            <p>Volver al menú principal</p>
          </Link>
        </div>
        <hr className="absolute left-1/2 top-1/2 -translate-x-1/2 w-96  border-white transform rotate-90" />
        <div className="h-screen flex flex-col justify-around items-center w-[50%]">
            <Link to="/driverregister">
          <section className="flex flex-col items-center gap-3">
            
              <p className="text-4xl w-[45%] ">Registrate como conductor</p>
              <img
                src={arrowExtendedIcon}
                alt="flecha-extendida"
                className="ml-3"
              />
            
          </section>
          </Link>
          <Link to="/useregister">
          <section className="flex flex-col items-center gap-3">
            
              <p className="text-4xl w-[50%] ">Registrate como viajero</p>
              <img
                src={arrowExtendedIcon}
                alt="flecha-extendida"
                className="ml-3"
              />
          </section>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UserTypeRegisterSelector;
