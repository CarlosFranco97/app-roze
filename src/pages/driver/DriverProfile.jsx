import React, { useState } from "react";

const DriverProfile = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showAcceptedMessage, setShowAcceptedMessage] = useState(false);

  return (
    <div className="relative h-screen w-screen">
      {/* Header */}
      <header className="absolute top-0 left-0 w-full flex justify-between items-center px-4 py-3 bg-[#031716] text-white z-20">
        <div className="font-bold text-xl">ROZE<span className="text-cyan-400">●</span></div>
        <button onClick={() => setShowMenu(true)} className="text-white text-2xl">
          ☰
        </button>
      </header>

      {/* Mapa de fondo */}
      <img
  src="https://maps.geoapify.com/v1/staticmap?style=osm-carto&width=800&height=600&center=lonlat:-75.5636,6.2518&zoom=13&apiKey=b05189a1881d4351af65b4818f429ed2"
  alt="mapa de Medellín"
  className="w-full h-full object-cover"
/>

      {/* Cuadro de viaje disponible con animación */}
      {!showAcceptedMessage && (
        <div className="absolute bottom-6 left-4 right-4 bg-white rounded-xl shadow-xl p-5 z-10 animate-slide-up opacity-0 animate-fade-in">
          <p className="text-gray-500 text-sm">Viaje disponible</p>
          <h2 className="text-2xl font-bold text-black">$9.900 COP</h2>
          <p className="text-gray-700 mb-4">Distancia: 32 km</p>

          <div className="bg-gray-100 p-3 rounded-lg mb-4">
            <p className="font-semibold text-black">Carlos <span className="text-yellow-500">★ 5.0</span></p>
            <p className="text-sm text-gray-700">Cl. 30 30 20 - Sabaneta, Antioquia</p>
            <p className="text-sm text-gray-700">Cl. 64 30 21 - Copacabana, Antioquia</p>
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700"
              onClick={() => setShowAcceptedMessage(true)}
            >
              Aceptar
            </button>
            <button className="bg-red-600 text-white px-4 py-2 rounded-xl hover:bg-red-700">
              Rechazar
            </button>
            <span className="text-sm text-gray-500">20s</span>
          </div>
        </div>
      )}

      {/* Mensaje de viaje aceptado */}
      {showAcceptedMessage && (
        <div className="absolute bottom-6 left-4 right-4 bg-green-100 border border-green-400 text-green-800 rounded-xl p-4 text-center shadow-lg z-10 animate-fade-in">
          🚗 ¡Viaje aceptado exitosamente!
        </div>
      )}

      {/* Sidebar del conductor */}
      {showMenu && (
        <div className="absolute top-0 left-0 w-64 h-full bg-[#031716] text-white shadow-xl z-30 p-4 flex flex-col justify-between">
          <div>
            <button
              onClick={() => setShowMenu(false)}
              className="mb-4 text-white font-bold text-xl"
            >
              ✕
            </button>

            <div className="flex flex-col items-center mt-4">
              <div className="w-20 h-20 rounded-full bg-gray-600 mb-2" />
              <p className="text-lg font-semibold">Ana</p>
              <p className="text-yellow-400">★ 1.6</p>
            </div>

            <ul className="mt-8 space-y-4">
              <li>📍 Registro de viajes</li>
              <li>⚙️ Configuración</li>
              <li>🔓 Cerrar sesión</li>
            </ul>
          </div>
        </div>
      )}

      {/* Fondo oscuro detrás del menú */}
      {showMenu && (
        <div
          className="absolute top-0 left-0 w-full h-full bg-black/50 z-20"
          onClick={() => setShowMenu(false)}
        ></div>
      )}

      {/* Animaciones personalizadas con Tailwind */}
      <style>{`
        @keyframes slide-up {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-in forwards;
        }
      `}</style>
    </div>
  );
};

export default DriverProfile;
