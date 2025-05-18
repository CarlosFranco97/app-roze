import SocialMediaIcon from "../../components/SocialMediaIcon";
import arrowIcon from "../../assets/icon/arrow.svg";
import arrowRight from "../../assets/icon/arrow-right.svg";
import facebookIcon from "../../assets/icon/facebook.svg";
import googleIcon from "../../assets/icon/google.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const DriverRegisterSecondPage = ({ onBack, onSubmit }) => {
  const [vehicleDataState, setVehicleDataState] = useState({
    brand: "",
    model: "",
    year: "",
    color: "",
    plate: "",
    license: "",
    termsAccepted: false,
  });

  const campos = [
    { name: "brand", label: "Marca" },
    { name: "model", label: "Modelo" },
    { name: "year", label: "Año" },
    { name: "color", label: "Color" },
    { name: "plate", label: "Placa" },
    { name: "license", label: "Licencia de conducción" },
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setVehicleDataState({
      ...vehicleDataState,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!vehicleDataState.termsAccepted) {
      alert("Debes aceptar los términos y condiciones.");
      return;
    }

    // Recuperar los datos del primer formulario (usuario temporal)
    const driverData = JSON.parse(localStorage.getItem("driverRozeTemp")) || {};

    // Combinar los datos del usuario y del vehículo
    const fullDriverData = {
      ...driverData,
      vehicle: {
        brand: vehicleDataState.brand,
        model: vehicleDataState.model,
        year: vehicleDataState.year,
        color: vehicleDataState.color,
        plate: vehicleDataState.plate,
        license: vehicleDataState.license,
      }
    };

    // Guardar en localStorage final (simulando base de datos)
    let allDrivers = JSON.parse(localStorage.getItem("drivers")) || [];
    allDrivers.push(fullDriverData);
    localStorage.setItem("drivers", JSON.stringify(allDrivers));

    // Limpiar los datos temporales
    localStorage.removeItem("driverRozeTemp");

    alert("¡Registro completado con éxito!");
    navigate("/menulogin/login");
  };


  return (
    <section className="flex w-full min-h-screen">
      {/* Sección izquierda */}
      <div className="bg-[#031716] min-h-screen w-[50%] flex flex-col justify-center items-center font-bold text-white">
        <img
          src="/assets/img/logo-roze-without-background.svg"
          alt="logo-roze"
        />
        <div
          className="flex justify-center items-center gap-2 cursor-pointer"
          onClick={onBack}
        >
          <img src={arrowIcon} alt="icono" />
          <p>Volver al menú anterior</p>
        </div>
      </div>

      {/* Sección derecha */}
      <div className="w-[50%] flex flex-col justify-center items-center gap-3">
        <h2 className="font-black text-4xl mb-5">Estás a un solo paso</h2>
        <h3 className="font-black text-2xl mb-6">Información del vehículo</h3>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center gap-2 w-[300px] font-bold"
        >
          {campos.map((campo) => (
            <div key={campo.name}>
              <label htmlFor={campo.name} className="font-bold self-start ml-3">
                {campo.label}
              </label>
              <input
                id={campo.name}
                type={campo.name === "year" ? "number" : "text"}
                name={campo.name}
                value={vehicleDataState[campo.name]}
                onChange={handleChange}
                className="bg-[#D9D9D9]/70 rounded-full px-5 py-3 w-[320px]"
                required
              />
            </div>
          ))}

          <div className="flex items-center gap-2 mt-4">
            <input
              type="checkbox"
              id="termsAccepted"
              name="termsAccepted"
              checked={vehicleDataState.termsAccepted}
              onChange={handleChange}
              required
            />
            <label htmlFor="termsAccepted" className="text-sm">
              Acepto los términos y condiciones
            </label>
          </div>

          <button
            type="submit"
            className="flex justify-between items-center w-full mt-8 mb-5 gap-1 cursor-pointer text-xl bg-[#031716] text-white py-2 px-4 rounded-full"
          >
            Registrarme
            <img src={arrowRight} alt="icono" />
          </button>

          <div className="mt-4">
            <SocialMediaIcon />
          </div>
        </form>
      </div>
    </section>
  );
};

export default DriverRegisterSecondPage;
