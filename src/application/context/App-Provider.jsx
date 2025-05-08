
import React, { useState } from 'react';
// Create a context to share modal state and functions
export const AppContext = React.createContext();


function AppProvider({ children }) {

  return (
    <AppContext.Provider value={null}>
      {children}

    </AppContext.Provider>
  );
}

export default AppProvider;
