import React, { useState } from "react";
import SocialMediaIcon from "../../components/SocialMediaIcon";
import arrowIcon from "../../assets/icon/arrow.svg";
import arrowRight from "../../assets/icon/arrow-right.svg";
import facebookIcon from "../../assets/icon/facebook.svg";
import googleIcon from "../../assets/icon/google.svg";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const DriverRegister = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    phone: "",
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    birthdate: "",
    role: "driver",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.phone ||
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword ||
      !formData.birthdate
    ) {
      alert("Todos los campos son obligatorios.");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      alert("Las contraseñas no coinciden.");
      return;
    }
    localStorage.setItem("driver", JSON.stringify(formData));
   

    onSubmit(formData);
  };
  const onBack = () => {
    navigate("/");
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
          <div
            onClick={onBack}
            className="flex justify-center items-center gap-2 cursor-pointer"
          >
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
           onChange={handleChange}
            id="phone"
            type="tel"
            name="phone"
            value={formData.phone}
            placeholder="Número celular"
            className="bg-[#D9D9D9]/70 rounded-full px-5 py-3 w-[320px] placeholder:text-[#031716]/50"
            required
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
            placeholder="Nombre"
            className="bg-[#D9D9D9]/70 rounded-full px-5 py-3 w-[320px] placeholder:text-[#031716]/50"
            required
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
            required
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
            required
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
            required
          />

          <label className="font-bold self-start ml-3" htmlFor="birthdate">
            Ingresa tu fecha de nacimiento
          </label>
          <input
            id="birthdate"
            type="date"
            name="birthdate"
            value={formData.birthdate}
            onChange={handleChange}
            className="bg-[#D9D9D9]/70 rounded-full px-5 py-3 w-[320px]"
            required
          />

          <button
            type="submit"
            className="flex justify-end items-center w-full mt-8 mb-5 gap-1 cursor-pointer"
          >
            Continuar
            <img src={arrowRight} alt="icono" />
          </button>

          <span className="font-semibold/50 text-center w-full cursor-pointer opacity-60">
            ¿Ya tienes cuenta?
          </span>

          <button className="bg-[#D9D9D9]/70 rounded-2xl p-3 w-full font-bold flex items-center justify-center gap-3 cursor-pointer">
            <img src={googleIcon} className="w-6 h-6" alt="logo-google" />
            Continuar con Google
          </button>

          <button className="bg-[#D9D9D9]/70 rounded-2xl p-3 w-full font-bold flex items-center justify-center gap-2 cursor-pointer">
            <img src={facebookIcon} className="w-6 h-6" alt="logo-facebook" />
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

export default DriverRegister;
