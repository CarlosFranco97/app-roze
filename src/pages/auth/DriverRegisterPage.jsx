

import { useState } from "react";
import DriverRegister from "./DriverRegister";
import DriverRegisterSecondPage from "./DriverRegisterSecondPage";

const DriverRegisterPage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    driver: {},
    vehicle: {},
  });

  const handleDriverSubmit = (driverData) => {
    setFormData((prevData) => ({
      ...prevData,
      driver: driverData,
    }));
    setStep(2);
  };

  const handleVehicleSubmit = (vehicleData) => {
    setFormData((prevData) => ({
      ...prevData,
      vehicle: vehicleData,
    }));
    alert("Registrado");
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  return (
    <>
      {step === 1 && <DriverRegister onSubmit={handleDriverSubmit} />}
      {step === 2 && (
        <DriverRegisterSecondPage
          onBack={handleBack}
          onSubmit={handleVehicleSubmit}
          vehicleData={formData.vehicle}
        />
      )}
    </>
  );
};

export default DriverRegisterPage;
