
import React, { useState } from "react";

const UserProfile = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="relative h-screen w-screen">
      {/* Header */}
      <header className="absolute top-0 left-0 w-full flex justify-between items-center px-4 py-3 bg-[#031716] text-white z-20"  >
        <div className="font-bold text-xl">ROZE<span className="text-cyan-400">●</span></div>
        <button onClick={() => setShowMenu(true)} className="text-white">
          ☰
        </button>
      </header>

      {/*imagen*/}
      <img
  src="https://maps.geoapify.com/v1/staticmap?style=osm-carto&width=800&height=600&center=lonlat:-75.5636,6.2518&zoom=13&apiKey=b05189a1881d4351af65b4818f429ed2"
  alt="mapa de Medellín"
  className="w-full h-full object-cover"
/>

      {/* Formulario sobrepuesto */}
      <div className="absolute bottom-6 left-4 right-4 bg-white rounded-xl shadow-lg p-4 z-10">
        <h2 className="text-xl font-semibold mb-3">Pide tu viaje</h2>

        <input
          type="text"
          placeholder="Tú ubicación"
          className="w-full p-3 mb-2 bg-gray-100 rounded"
        />
        <div className="relative">
          <input
            type="text"
            placeholder="¿A dónde vas?"
            className="w-full p-3 pr-10 bg-gray-100 rounded"
          />
          <span className="absolute right-3 top-3 text-gray-500">➜</span>
        </div>
      </div>

   {/* Sidebar (menú lateral) */}
{showMenu && (
  <div className="absolute top-0 left-0 w-64 h-full bg-[#031716] text-white shadow-xl z-30 p-4">
    <button
      onClick={() => setShowMenu(false)}
      className="mb-4 text-white font-bold"
    >
      ✕ Cerrar
    </button>
    <ul className="space-y-4">
      <li>🏠 Inicio</li>
      <li>📍 Historial de viajes</li>
      <li>⚙️ Configuración</li>
      <li>🔓 Cerrar sesión</li>
    </ul>
  </div>
)}


      {/* Fondo oscuro detrás del menú */}
      {showMenu && (
        <div
          className="absolute top-0 left-0 w-full h-full bg-black/50 z-20"
          onClick={() => setShowMenu(false)}
        ></div>
      )}
    </div>
  );
};


export default UserProfile;