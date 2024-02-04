import React, { useState } from 'react';
import GeneradorNumeros from './GeneradorNumeros'; // Corrected import statement

const App = () => {
  const [showSpinner, setShowSpinner] = useState(false);

  const toggleSpinner = (show) => {
    setShowSpinner(show);
  };

  return (
    <div>
      {showSpinner && <div className="loader"></div>} {/* Spinner aquí */}
      <GeneradorNumeros toggleSpinner={toggleSpinner} />
    </div>
  );
};

export default App;
