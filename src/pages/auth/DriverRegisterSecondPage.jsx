import SocialMediaIcon from '../../components/SocialMediaIcon';
import arrowIcon from '../../assets/icon/arrow.svg';


const DriverRegisterSecondPage = () => {
  return (
    <section className="flex w-full min-h-screen">
      {/* Sección izquierda */}
      <div className="bg-[#031716] min-h-screen w-[50%] flex flex-col justify-center items-center font-bold text-white ">
        <img
          src="/assets/img/logo-roze-without-background.svg"
          alt="logo-roze"
        />
        <div className="flex justify-center items-center gap-2 cursor-pointer">
          <img src={arrowIcon} alt="icono" />
          <p>Volver al menú anterior</p>
        </div>
      </div>

      {/* Sección derecha */}
      <div className="w-[50%] flex flex-col justify-center items-center gap-3">
        <h2 className="font-black text-4xl mb-5">Estás a un solo paso</h2>
        <h3 className="font-black text-2xl mb-6">Informacion del vehículo </h3>
        <form className="flex flex-col justify-center items-center gap-2 w-[300px] font-bold">
          <label
            className="font-bold self-start ml-3"
            htmlFor="vehiclebrand
"
          >
            Ingresa la marca del vehículo
          </label>
          <input
            id="vehiclebrand"
            type="text"
            placeholder="Marca vehículo"
            className="bg-[#D9D9D9]/70 rounded-full px-5 py-3 w-[320px] placeholder:text-[#031716]/50"
          />

          <label className="font-bold self-start ml-3" htmlFor="model">
            Ingresa el modelo del vehículo
          </label>
          <input
            id="model"
            type="text"
            placeholder="Modelo del vehículo"
            className="bg-[#D9D9D9]/70 rounded-full px-5 py-3 w-[320px] placeholder:text-[#031716]/50"
          />

          <label className="font-bold self-start ml-3" htmlFor="year">
            Ingresa año del vehiculo
          </label>
          <input
            id="year"
            type="text"
            placeholder="Año del vehículo"
            className="bg-[#D9D9D9]/70 rounded-full px-5 py-3 w-[320px] placeholder:text-[#031716]/50"
          />

          <label className="font-bold self-start ml-3" htmlFor="color">
            Ingresa el color del vehículo
          </label>
          <input
            id="color"
            type="text"
            placeholder="Color del vehículo"
            className="bg-[#D9D9D9]/70 rounded-full px-5 py-3 w-[320px] placeholder:text-[#031716]/50"
          />

          <label className="font-bold self-start ml-3" htmlFor="plate">
            Ingresa placa del vehículo
          </label>
          <input
            id="platecar"
            type="text"
            placeholder=" PLaca del vehículo"
            className="bg-[#D9D9D9]/70 rounded-full px-5 py-3 w-[320px] placeholder:text-[#031716]/50"
          />

          <label className="font-bold self-start ml-3" htmlFor="licencia">
            Ingresa la licencia de conducir
          </label>
          <input
            id="licencia"
            type="text"
            placeholder="Licencia de conducir"
            className="bg-[#D9D9D9]/70 rounded-full px-5 py-3 w-[320px] placeholder:text-[#031716]/50"
          />

          <div className="flex flex-col items-center gap-2">
            <label
              htmlFor="terminos"
              className="text-center cursor-pointer opacity-60   mt-5  mb-1 hover:underline"
              
            >
              Leer términos y condiciones
            </label>
            <div className="flex items-center gap-3">
              <input type="checkbox" id="terminos" className="w-5 h-5" />
              <label htmlFor="terminos" className="text-center">
                Acepto términos y condiciones
              </label>
            </div>
          </div>

          <button className="bg-[#031716] text-white rounded-2xl p-3 w-[170px] font-bold cursor-pointer mt-10">
            Registrarme
          </button>

          <span className="font-semibold/50 text-center w-full cursor-pointer opacity-60">
            ¿Ya tienes cuenta?
          </span>

          <div className="mt-4">
            <SocialMediaIcon />
          </div>
        </form>
      </div>
    </section>
  );
};
export default DriverRegisterSecondPage;
