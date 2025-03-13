import React, { createContext, useState } from 'react';
import { MyRoutes } from './index';
import { Light, Dark } from './index';
import { ThemeProvider } from 'styled-components';

// Creación del contexto (asegúrate de usar createContext, no Createcontext)
export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  const themeStyle = theme === "light" ? Light : Dark;

  return (
    // Utiliza .Provider para pasar el valor del contexto
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={themeStyle}>
        <MyRoutes />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;

