import { BrowserRouter } from "react-router-dom";
import { MyRoutes } from "./index";
import { createContext, useState } from "react";
import { Light, Dark, AuthContextProvider } from "./index";
import { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; // ✅ Importar QueryClientProvider
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// 🔹 Crear una instancia de QueryClient
const queryClient = new QueryClient();

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  const themeStyle = theme === "light" ? Light : Dark;

  return (
    <ThemeContext.Provider value={{ setTheme, theme }}>
      <ThemeProvider theme={themeStyle}>
        <AuthContextProvider>
          {/* ✅ Agregar QueryClientProvider aquí */}
          <QueryClientProvider client={queryClient}>
            <BrowserRouter>
              <MyRoutes />
            </BrowserRouter>
            {import.meta.env.MODE === "development" && <ReactQueryDevtools initialIsOpen={false} />}
          </QueryClientProvider>
        </AuthContextProvider>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;


