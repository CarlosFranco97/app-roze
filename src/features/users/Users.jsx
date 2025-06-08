import { useState } from "react"
import UserMap from "./components/UserMap"
import VehicleSelection from "./components/VehicleSelection"
import SearchingDriver from "./components/SearchingDriver"
import TripInProgress from "./components/TripInProgress"
import ChatWithDriver from "./components/ChatWithDriver"

const Users = () => {
  const [currentView, setCurrentView] = useState("map") // map, vehicleSelection, searching, tripInProgress, chat
  const [tripData, setTripData] = useState({
    origin: "",
    destination: "",
    vehicleType: "",
    driver: null,
  })

  const handleRequestRide = (origin, destination) => {
    setTripData((prev) => ({
      ...prev,
      origin,
      destination,
    }))
    setCurrentView("vehicleSelection")
  }

  const handleVehicleSelect = (vehicleType) => {
    setTripData((prev) => ({
      ...prev,
      vehicleType,
    }))
    setCurrentView("searching")
  }

  const handleDriverFound = () => {
    setTripData((prev) => ({
      ...prev,
      driver: {
        name: "Valentina",
        rating: 5.0,
        vehicle: "Chevrolet Spark",
        plate: "XXX-XXX",
      },
    }))
    setCurrentView("tripInProgress")
  }

  const handleCancelTrip = () => {
    setTripData({
      origin: "",
      destination: "",
      vehicleType: "",
      driver: null,
    })
    setCurrentView("map")
  }

  const handleOpenChat = () => {
    setCurrentView("chat")
  }

  const handleBackFromChat = () => {
    setCurrentView("tripInProgress")
  }

  const renderCurrentView = () => {
    switch (currentView) {
      case "map":
        return <UserMap onRequestRide={handleRequestRide} />
      case "vehicleSelection":
        return (
          <VehicleSelection
            onVehicleSelect={handleVehicleSelect}
            onBack={() => setCurrentView("map")}
            tripData={tripData}
          />
        )
      case "searching":
        return <SearchingDriver onDriverFound={handleDriverFound} onCancel={handleCancelTrip} />
      case "tripInProgress":
        return <TripInProgress driver={tripData.driver} onCancelTrip={handleCancelTrip} onOpenChat={handleOpenChat} />
      case "chat":
        return <ChatWithDriver driver={tripData.driver} onBack={handleBackFromChat} />
      default:
        return <UserMap onRequestRide={handleRequestRide} />
    }
  }

  return <div className="h-screen w-full">{renderCurrentView()}</div>
}

export default Users
