import SocialMediaIcon from '../../components/SocialMediaIcon';
import googleIcon from '../../assets/icon/google.svg';
import facebookIcon from '../../assets/icon/facebook.svg';
import arrowIcon from '../../assets/icon/arrow.svg';

const Register = () => {
  return (
    <section className="flex w-full min-h-screen">
      {/* Sección izquierda */}
      <div className="bg-[#031716] min-h-screen w-[50%] flex flex-col justify-center items-center font-bold text-white ">
        <img src="/assets/img/logo-roze-without-background.svg" alt="logo-roze" />
        <div className="flex justify-center items-center gap-3 cursor-pointer">
          <img src={arrowIcon} alt="icono" />
          <p>Volver al menú anterior</p>
        </div>
      </div>

      {/* Sección derecha */}
      <div className="w-[50%] flex flex-col justify-center items-center gap-3">
        <h2 className="font-black text-4xl mb-5">Regístrate</h2>
        <form className="flex flex-col justify-center items-center gap-2 w-[300px] font-bold">
          <label className="font-bold self-start ml-3" htmlFor="telefono">
            Ingresa tu número de celular
          </label>
          <input
            id="telefono"
            type="tel"
            placeholder="Número celular"
            className="bg-[#D9D9D9]/70 rounded-full px-5 py-3 w-[320px] placeholder:text-[#031716]/50"
          />

          <label className="font-bold self-start ml-3" htmlFor="nombre">
            Ingresa tu nombre completo
          </label>
          <input
            id="nombre"
            type="text"
            placeholder="Nombre"
            className="bg-[#D9D9D9]/70 rounded-full px-5 py-3 w-[320px] placeholder:text-[#031716]/50"
          />

          <label className="font-bold self-start ml-3" htmlFor="correo">
            Ingresa tu correo
          </label>
          <input
            id="correo"
            type="email"
            placeholder="Correo"
            className="bg-[#D9D9D9]/70 rounded-full px-5 py-3 w-[320px] placeholder:text-[#031716]/50"
          />

          <label className="font-bold self-start ml-3" htmlFor="contrasena">
            Ingresa tu contraseña
          </label>
          <input
            id="contrasena"
            type="password"
            placeholder="Contraseña"
            className="bg-[#D9D9D9]/70 rounded-full px-5 py-3 w-[320px] placeholder:text-[#031716]/50"
          />

          <label className="font-bold self-start ml-3" htmlFor="confirmarContrasena">
            Ingresa nuevamente tu contraseña
          </label>
          <input
            id="confirmarContrasena"
            type="password"
            placeholder="Confirmar contraseña"
            className="bg-[#D9D9D9]/70 rounded-full px-5 py-3 w-[320px] placeholder:text-[#031716]/50"
          />

          <label className="font-bold self-start ml-3" htmlFor="fechaNacimiento">
            Ingresa tu fecha de nacimiento
          </label>
          <input
            id="fechaNacimiento"
            type="date"
            className="bg-[#D9D9D9]/70 rounded-full px-5 py-3 w-[320px]"
          />

          <div className="flex flex-col items-center gap-2">
            <label htmlFor="terminos" className="text-center cursor-pointer opacity-60">
              Leer términos y condiciones
            </label>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="terminos" className='w-5 h-5'/>
              <label htmlFor="terminos" className="text-center">
                He leído términos y condiciones
              </label>
            </div>
          </div>

          <button className="bg-[#031716] text-white rounded-2xl p-3 w-[170px] font-bold cursor-pointer mt-10">
            Registrarme
          </button>

          <span className="font-semibold/50 text-center w-full cursor-pointer opacity-60">
            ¿Ya tienes cuenta?
          </span>

          <button className="bg-[#D9D9D9]/70 rounded-2xl p-3 w-full font-bold flex items-center justify-center gap-3 cursor-pointer">
            <img src={googleIcon} className="w-6 h-6" alt="logo-google" />
            Continuar con Google
          </button>

          <button className="bg-[#D9D9D9]/70 rounded-2xl p-3 w-full font-bold  flex items-center justify-center gap-2 cursor-pointer">
            <img src={facebookIcon} className="w-6 h-6" />
            Continuar con Facebook
          </button>
          <div className='mt-5'>
            <SocialMediaIcon />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;
