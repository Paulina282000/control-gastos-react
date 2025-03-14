import { Routes, Route } from "react-router-dom";
import { Login, Home, ProtectedRoute } from "../index";
import { useAuthStore } from "../store/AuthStore";

export function MyRoutes() {  // ⬅️ Asegúrate de que la función es exportada correctamente
  const { datauserGoogle } = useAuthStore();

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<ProtectedRoute user={datauserGoogle} redirectTo="/login" />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}
