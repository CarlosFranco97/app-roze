import SocialMediaIcon from "../../components/SocialMediaIcon";
import googleIcon from "../../assets/icon/google.svg";
import facebookIcon from "../../assets/icon/facebook.svg";
import arrowIcon from "../../assets/icon/arrow.svg";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const UserRegister = () => {
  const [formData, setFormData] = useState({
    phone: "",
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    dateOfBirth: "",
    role: "traveler",
  });

  const [acceptTermsAndConditions, setAcceptTermsAndConditions] =
    useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { phone, name, email, password, confirmPassword, dateOfBirth } =
      formData;

    if (
      !phone ||
      !name ||
      !email ||
      !password ||
      !confirmPassword ||
      !dateOfBirth
    ) {
      alert("Todos los campos son obligatorios.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden.");
      return;
    }

    if (!acceptTermsAndConditions) {
      alert("Debes aceptar los términos y condiciones.");
      return;
    }

    console.log("Datos enviados:", formData);

    const userData = {
      phone,
      name,
      email,
      password,
      dateOfBirth,
      role: formData.role,
    };

    if (formData.role === "traveler") {
      localStorage.setItem("traveler", JSON.stringify(userData));
    } else if (formData.role === "driver") {
      localStorage.setItem("driver", JSON.stringify(userData));
    }

    alert("¡Registro exitoso! Ahora puedes iniciar sesión.");
    navigate("/menulogin/login");
  };

  return (
    <section className="flex w-full min-h-screen">
      {/* Sección izquierda */}
      <div className="bg-[#031716] min-h-screen w-[50%] flex flex-col justify-center items-center font-bold text-white ">
        <img
          src="/assets/img/logo-roze-without-background.svg"
          alt="logo-roze"
        />
        <Link to="/menuregister">
          <div className="flex justify-center items-center gap-3 cursor-pointer">
            <img src={arrowIcon} alt="icono" />
            <p>Volver al menú anterior</p>
          </div>
        </Link>
      </div>

      {/* Sección derecha */}
      <div className="w-[50%] flex flex-col justify-center items-center gap-3">
        <h2 className="font-black text-4xl mb-5">Regístrate</h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center gap-2 w-[300px] font-bold"
        >
          <label className="font-bold self-start ml-3" htmlFor="phone">
            Ingresa tu número de celular
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Número celular"
            className="bg-[#D9D9D9]/70 rounded-full px-5 py-3 w-[320px] placeholder:text-[#031716]/50"
          />

          <label className="font-bold self-start ml-3" htmlFor="name">
            Ingresa tu nombre completo
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="nombre"
            className="bg-[#D9D9D9]/70 rounded-full px-5 py-3 w-[320px] placeholder:text-[#031716]/50"
          />

          <label className="font-bold self-start ml-3" htmlFor="email">
            Ingresa tu correo
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Correo"
            className="bg-[#D9D9D9]/70 rounded-full px-5 py-3 w-[320px] placeholder:text-[#031716]/50"
          />

          <label className="font-bold self-start ml-3" htmlFor="password">
            Ingresa tu contraseña
          </label>
          <input
            id="password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Contraseña"
            className="bg-[#D9D9D9]/70 rounded-full px-5 py-3 w-[320px] placeholder:text-[#031716]/50"
          />

          <label
            className="font-bold self-start ml-3"
            htmlFor="confirmPassword"
          >
            Ingresa nuevamente tu contraseña
          </label>
          <input
            id="confirmPassword"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirmar contraseña"
            className="bg-[#D9D9D9]/70 rounded-full px-5 py-3 w-[320px] placeholder:text-[#031716]/50"
          />

          <label className="font-bold self-start ml-3" htmlFor="dateOfBirth">
            Ingresa tu fecha de nacimiento
          </label>
          <input
            id="dateOfBirth"
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            className="bg-[#D9D9D9]/70 rounded-full px-5 py-3 w-[320px]"
          />

          <div className="flex flex-col items-center gap-2">
            <label
              htmlFor="termsAndConditions"
              className="text-center cursor-pointer opacity-60 hover:underline mt-5 mb-3"
            >
              Leer términos y condiciones
            </label>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="acceptTermsAndConditions"
                checked={acceptTermsAndConditions}
                onChange={(e) => setAcceptTermsAndConditions(e.target.checked)}
                className="w-5 h-5"
              />
              <label htmlFor="acceptTermsAndConditions" className="text-center">
                Acepto término y condiciones
              </label>
            </div>
          </div>

          <button
            className="bg-[#031716] text-white rounded-2xl p-3 w-[170px] font-bold cursor-pointer mt-10"
            type="submit"
          >
            Registrarme
          </button>

          <Link
            to="/menulogin"
            className="font-semibold/50 text-center w-full cursor-pointer opacity-60"
          >
            ¿Ya tienes cuenta?
          </Link>

          <button className="bg-[#D9D9D9]/70 rounded-2xl p-3 w-full font-bold flex items-center justify-center gap-3 cursor-pointer">
            <img src={googleIcon} className="w-6 h-6" alt="logo-google" />
            Continuar con Google
          </button>

          <button className="bg-[#D9D9D9]/70 rounded-2xl p-3 w-full font-bold  flex items-center justify-center gap-2 cursor-pointer">
            <img src={facebookIcon} className="w-6 h-6" />
            Continuar con Facebook
          </button>
          <div className="mt-5">
            <SocialMediaIcon />
          </div>
        </form>
      </div>
    </section>
  );
};

export default UserRegister;
