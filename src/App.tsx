import { Outlet, Route, Routes } from "react-router-dom";
import { ExpressSelfServicePage } from "./pages/express-self-service/ExpressSelfServicePage";
import { SelectLanguagePage } from "./pages/select-language/SelectLanguagePage";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route index element={<ExpressSelfServicePage />} />
        <Route path="select-language" element={<SelectLanguagePage />} />
      </Route>
    </Routes>
  );
};
