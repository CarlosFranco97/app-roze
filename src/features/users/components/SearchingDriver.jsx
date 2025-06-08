"use client"

import { useEffect } from "react"
import hamburguerIcon from "../../../assets/icon/hamburguer-icon.svg"
import DriversMap from "../../conductors/DriversMap"
const SearchingDriver = ({ onDriverFound, onCancel }) => {
  useEffect(() => {
    // Simular búsqueda de conductor por 5 segundos
    const timer = setTimeout(() => {
      onDriverFound()
    }, 5000)

    return () => clearTimeout(timer)
  }, [onDriverFound])

  return (
    <div className="relative h-screen w-full">
      {/* Header */}
      <header className="absolute top-0 left-0 w-full flex justify-between items-center px-4 py-3 bg-[#031716] text-white z-20">
        <div className="font-bold text-xl">
          ROZE<span className="text-cyan-400">●</span>
        </div>
        <img src={hamburguerIcon || "/placeholder.svg"} alt="menu" className="w-6 h-6" />
      </header>

      {/* Mapa de fondo */}
      <DriversMap/>

      {/* Contenido de búsqueda */}
      <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl p-6 z-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-black mb-8">Buscando tu conductor de confianza</h2>

          {/* Loading spinner */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-2 h-2 bg-black rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Botón cancelar */}
          <button onClick={onCancel} className="w-full bg-[#031716] text-white py-4 rounded-xl font-bold text-lg">
            Cancelar búsqueda
          </button>
        </div>
      </div>
    </div>
  )
}

export default SearchingDriver
