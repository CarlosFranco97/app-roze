import hamburguerIcon from "../../../assets/icon/hamburguer-icon.svg"

const VehicleSelection = ({ onVehicleSelect, onBack, tripData }) => {
  const vehicles = [
    {
      type: "moto",
      name: "Moto",
      image: "🏍️",
      price: "COP $8,500",
    },
    {
      type: "carro",
      name: "Carro",
      image: "🚗",
      price: "COP $12,000",
    },
  ]

  return (
    <div className="h-screen w-full bg-gray-200">
      {/* Header */}
      <header className="flex justify-between items-center px-4 py-3 bg-[#031716] text-white">
        <button onClick={onBack} className="text-white text-xl">
          ←
        </button>
        <div className="font-bold text-xl">
          ROZE<span className="text-cyan-400">●</span>
        </div>
        <img src={hamburguerIcon || "/placeholder.svg"} alt="menu" className="w-6 h-6" />
      </header>

      <div className="p-6">
        <h1 className="text-xl font-bold text-center mb-2">Menú para confirmar viaje y medio de transporte</h1>

        {/* Información del viaje */}
        <div className="bg-gray-300 p-4 rounded-xl mb-6">
          <p className="text-sm text-gray-600">De: {tripData.origin}</p>
          <p className="text-sm text-gray-600">A: {tripData.destination}</p>
        </div>

        {/* Opciones de vehículos */}
        <div className="space-y-4 mb-8">
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.type}
              className="bg-white p-4 rounded-xl shadow-sm flex items-center justify-between cursor-pointer hover:bg-gray-50"
              onClick={() => onVehicleSelect(vehicle.type)}
            >
              <div className="flex items-center space-x-4">
                <span className="text-3xl">{vehicle.image}</span>
                <div>
                  <h3 className="font-bold text-lg">{vehicle.name}</h3>
                  <p className="text-gray-500 text-sm">Imagen</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold">Tarifa: {vehicle.price}</p>
                <div className="w-4 h-4 border-2 border-gray-400 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Botón de pedir viaje */}
        <button
          onClick={() => onVehicleSelect("carro")}
          className="w-full bg-[#031716] text-white py-4 rounded-xl font-bold text-lg"
        >
          Pedir viaje
        </button>
      </div>
    </div>
  )
}

export default VehicleSelection
