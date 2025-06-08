"use client"

import { useState } from "react"
import hamburguerIcon from "../../../assets/icon/hamburguer-icon.svg"
import DriversMap from "../../conductors/DriversMap"
const UserMap = ({ onRequestRide }) => {
  const [origin, setOrigin] = useState("")
  const [destination, setDestination] = useState("")
  const [showMenu, setShowMenu] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (origin && destination) {
      onRequestRide(origin, destination)
    }
  }

  return (
    <div className="relative h-screen w-full">
      {/* Header */}
      <header className="absolute top-0 left-0 w-full flex justify-between items-center px-4 py-3 bg-[#031716] text-white z-20">
        <div className="font-bold text-xl">
          ROZE<span className="text-cyan-400">●</span>
        </div>
        <button onClick={() => setShowMenu(true)} className="text-white text-2xl">
          <img src={hamburguerIcon || "/placeholder.svg"} alt="menu" className="w-6 h-6" />
        </button>
      </header>

      {/* Mapa de fondo */}
      
      <DriversMap/>
      {/* Formulario de viaje */}
      <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl p-6 z-10">
        <h2 className="text-2xl font-bold text-black mb-6">Pide tu viaje</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Tu ubicación"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              className="w-full p-4 bg-gray-200 rounded-xl text-gray-700 placeholder-gray-500"
            />
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="A donde vas?"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full p-4 bg-gray-200 rounded-xl text-gray-700 placeholder-gray-500 pr-12"
            />
            <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600">
              →
            </button>
          </div>
        </form>
      </div>

      {/* Sidebar del usuario */}
      {showMenu && (
        <div className="absolute top-0 left-0 w-64 h-full bg-[#031716] text-white shadow-xl z-30 p-4 flex flex-col justify-between">
          <div>
            <button onClick={() => setShowMenu(false)} className="mb-4 text-white font-bold text-xl">
              ✕
            </button>

            <div className="flex flex-col items-center mt-4">
              <div className="w-20 h-20 rounded-full bg-gray-600 mb-2" />
              <p className="text-lg font-semibold">Usuario</p>
            </div>

            <ul className="mt-8 space-y-4">
              <li className="cursor-pointer hover:bg-gray-700 p-2 rounded">📍 Mis viajes</li>
              <li className="cursor-pointer hover:bg-gray-700 p-2 rounded">⚙️ Configuración</li>
              <li className="cursor-pointer hover:bg-gray-700 p-2 rounded">🔓 Cerrar sesión</li>
            </ul>
          </div>
        </div>
      )}

      {/* Fondo oscuro detrás del menú */}
      {showMenu && (
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-20" onClick={() => setShowMenu(false)}></div>
      )}
    </div>
  )
}

export default UserMap
