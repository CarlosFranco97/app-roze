import { FcGoogle } from "react-icons/fc";
const Registro = () => {
  return (
    <section className="flex w-full min-h-screen">
      {/* Sección izquierda */}
      <div className="bg-[#031716] min-h-screen w-[50%] flex flex-col justify-center items-center font-bold text-white">
        <img src="" alt="logo-roze" />
        <div className="flex justify-center items-center">
          <img src="" alt="icono" />
          <p>Volver al menú</p>
        </div>
      </div>

      {/* Sección derecha */}
      <div className="w-[50%] flex flex-col justify-center items-center gap-3">
        <h2 className="font-bold text-2xl">Regístrate</h2>
        <form className="flex flex-col justify-center items-center gap-2 w-[300px]">
          <label className="font-bold self-start" htmlFor="telefono">
            Ingresa tu número de celular
          </label>
          <input
            id="telefono"
            type="tel"
            placeholder="Número celular"
            className="bg-[#D9D9D9]/70 rounded-full px-4 py-2 w-full"
          />

          <label className="font-bold self-start" htmlFor="nombre">
            Ingresa tu nombre completo
          </label>
          <input
            id="nombre"
            type="text"
            placeholder="Nombre"
            className="bg-[#D9D9D9]/70 rounded-full px-4 py-2 w-full"
          />

          <label className="font-bold self-start" htmlFor="correo">
            Ingresa tu correo
          </label>
          <input
            id="correo"
            type="email"
            placeholder="Correo"
            className="bg-[#D9D9D9]/70 rounded-full px-4 py-2 w-full"
          />

          <label className="font-bold self-start" htmlFor="contrasena">
            Ingresa tu contraseña
          </label>
          <input
            id="contrasena"
            type="password"
            placeholder="Contraseña"
            className="bg-[#D9D9D9]/70 rounded-full px-4 py-2 w-full"
          />

          <label className="font-bold self-start" htmlFor="confirmarContrasena">
            Ingresa nuevamente tu contraseña
          </label>
          <input
            id="confirmarContrasena"
            type="password"
            placeholder="Confirmar contraseña"
            className="bg-[#D9D9D9]/70 rounded-full px-4 py-2 w-full"
          />

          <label className="font-bold self-start" htmlFor="fechaNacimiento">
            Ingresa tu fecha de nacimiento
          </label>
          <input
            id="fechaNacimiento"
            type="date"
            className="bg-[#D9D9D9]/70 rounded-full px-4 py-2 w-full"
          />

          <div className="flex flex-col items-center gap-2">
            <label htmlFor="terminos" className="text-center">
              Leer términos y condiciones
            </label>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="terminos" />
              <label htmlFor="terminos" className="text-center">
                He leído términos y condiciones
              </label>
            </div>
          </div>

          <button className="bg-[#031716] text-white rounded-xl px-4 py-2 w-[170px] font-bold">
            Registrarme
          </button>

          <span className="font-semibold/50 text-center w-full">
            ¿Ya tienes cuenta?
          </span>

          <button className="bg-[#D9D9D9]/70 rounded-2xl p-3 w-full font-bold flex items-center justify-center gap-3">
            <FcGoogle className="text-xl" /> Continuar con Google
          </button>

          <button className="bg-[#D9D9D9]/70 rounded-2xl p-3 w-full font-bold">
            Continuar con Facebook
          </button>
        </form>
      </div>
    </section>
  );
};

export default Registro;
