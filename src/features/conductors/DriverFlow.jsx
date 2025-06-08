import React, { useState } from 'react';
import DriversMap from './DriversMap';

const DriverFlow = () => {
  const [step, setStep] = useState(0);
  const steps = [
    'available', // Viaje disponible
    'arrived',   // Ya llegué
    'waiting',   // Tiempo de espera
    'inTransit', // Iniciar viaje
    'finished',  // Has llegado
    'rating'     // Calificación
  ];

  const renderStep = () => {
    const current = steps[step];
    switch(current) {
      case 'available':
        return (
          <div className="ui-card">
            <p className="title">Viaje disponible</p>
            <p className="price">$9.900 COP</p>
            <p className="distance">Distancia: 32 km</p>
            <div className="client-info">
              <div className="avatar" />
              <div>
                <p>Carlos <span>★ 5.0</span></p>
                <p>Cl. 30 30 20, Sabaneta, Antioquia</p>
                <p>Cl. 64 30 21, Copacabana, Antioquia</p>
              </div>
            </div>
            <div className="actions">
              <button onClick={() => setStep(step+1)}>Aceptar</button>
              <button onClick={() => {/* rechazar lógica */}}>Rechazar</button>
            </div>
          </div>
        );
      case 'arrived':
        return (
          <div>
            <DriversMap arrow />
            <button onClick={() => setStep(step+1)}>Ya llegué</button>
            <div className="bottom-actions">
              <button>Cancelar</button>
              <button>Navegar</button>
            </div>
          </div>
        );
      case 'waiting':
        return (
          <div>
            {/* <DriversMap /> */}
            <p>Tiempo de espera 3:45</p>
            <button onClick={() => setStep(step+1)}>Iniciar viaje</button>
            <button>Ocurrió un problema</button>
          </div>
        );
      case 'inTransit':
        return (
          <div>
            {/* <DriversMap /> */}
            <p>Has llegado a tu destino</p>
            <button onClick={() => setStep(step+1)}>Finalizar viaje</button>
          </div>
        );
      case 'finished':
        return (
          <div>
            {/* <DriversMap /> */}
            <div className="rating-card">
              <p>Calificar a Carlos</p>
              <div className="stars">★★★★★</div>
            </div>
            <p>Sigue conduciendo con Roze</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="driver-flow">
      <DriversMap />
      {renderStep()}
    </div>
  );
};

export default DriverFlow;
