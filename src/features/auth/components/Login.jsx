import arrowIcon from "../../../assets/icon/arrow.svg";
import googleIcon from "../../../assets/icon/google.svg";
import facebookIcon from "../../../assets/icon/facebook.svg";
import SocialMediaIcon from "../../../components/SocialMediaIcon";
import { Link, useNavigate } from "react-router-dom";
import useForm from "../hooks/useForm";


const Login = () => {
  const navigate = useNavigate();
  const { formState, handleChange, handleLogin } = useForm({
    emailOrPhone: '',
    password: ''
  });

  return (
    <section className="flex w-full min-h-screen">
      <div className="bg-[#031716] min-h-screen w-[50%] flex flex-col justify-center items-center gap-1 font-bold text-white">
        <img
          src="/assets/img/logo-roze-without-background.svg"
          alt="logo-roze"
        />
        <Link to="/">
          <div className="flex justify-center items-center gap-3 cursor-pointer">
            <img src={arrowIcon} className="w-6 h-6" alt="icono-flecha" />
            <p>Volver al menú anterior</p>
          </div>
        </Link>
      </div>
      <div className="w-[50%] flex flex-col justify-center items-center gap-5">
        <h2 className="font-black text-[#031716] text-4xl">Iniciar sesión</h2>
        <form
          className="flex flex-col justify-center items-center gap-3 font-bold"
          onSubmit={handleLogin}
        >
          <label className="text-left w-full ml-6" htmlFor="emailOrPhone">
            Ingresa tú número de celular o correo
          </label>
          <input
            id="emailOrPhone"
            name="emailOrPhone"
            type="text"
            placeholder="Celular o correo"
            value={formState.emailOrPhone}
            onChange={(e) => handleChange(e)}
            className="bg-[#D9D9D9]/70 rounded-full  px-5 py-3 w-[320px] placeholder:text-[#031716]/50"
          />
          <label className="text-left w-full ml-6" htmlFor="password">
            Ingresa tu contraseña
          </label>
          <input
            id="password"
            type="password"
            name="emailOrPhone"
            placeholder="Contraseña"
            value={formState.password}
            onChange={(e) => handleChange(e)}
            className="bg-[#D9D9D9]/70 rounded-full  px-5 py-3 w-[320px] placeholder:text-[#031716]/50"
          />
          <p>Restablecer contraseña</p>
          <button
            type="submit"
            className="bg-[#031716] text-white text-xl w-[170px] rounded-2xl p-3 cursor-pointer"
          >
            Iniciar sesión
          </button>
          <a href="" className="opacity-50">
            ¿Aún no tienes cuenta?
          </a>
          <button className="flex justify-center items-center gap-3 bg-[#D9D9D9]/70 rounded-2xl p-3 w-[280px] font-bold cursor-pointer">
            <img src={googleIcon} className="w-6 h-6" alt="logo-google" />
            Continuar con Google
          </button>
          <button className="flex justify-center items-center gap-3 bg-[#D9D9D9]/70 rounded-2xl p-3 w-[280px] font-bold cursor-pointer">
            <img src={facebookIcon} className="w-6 h-6 rounded-[2px]" alt="" />
            Continuar con Facebook
          </button>
          <div className="mt-4">
            <SocialMediaIcon />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
