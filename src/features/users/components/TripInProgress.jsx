import hamburguerIcon from "../../../assets/icon/hamburguer-icon.svg"
import DriversMap from "../../conductors/DriversMap"
const TripInProgress = ({ driver, onCancelTrip, onOpenChat }) => {
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

      {/* Información del viaje */}
      <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl p-6 z-10">
        <h2 className="text-2xl font-bold text-black mb-6">Tu vehículo está en camino</h2>

        {/* Información del conductor */}
        <div className="bg-gray-100 p-4 rounded-xl mb-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-[#031716] rounded-full flex items-center justify-center">
              <span className="text-white font-bold">V</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <h3 className="font-bold text-lg">{driver?.name}</h3>
                <div className="flex items-center">
                  <span className="text-yellow-500">★</span>
                  <span className="text-sm">{driver?.rating}</span>
                </div>
              </div>
              <p className="text-gray-600">{driver?.vehicle}</p>
              <p className="text-gray-600">{driver?.plate}</p>
            </div>
          </div>
        </div>

        {/* Botones de acción */}
        <div className="flex space-x-4">
          <button onClick={onCancelTrip} className="flex-1 bg-[#031716] text-white py-4 rounded-xl font-bold">
            Cancelar viaje
          </button>
          <button onClick={onOpenChat} className="w-16 h-16 bg-gray-200 rounded-xl flex items-center justify-center">
            💬
          </button>
        </div>
      </div>
    </div>
  )
}

export default TripInProgress
