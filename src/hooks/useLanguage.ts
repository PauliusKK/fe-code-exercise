import { useState } from "react";
import { Languages } from "../types/Languages";

export const useLanguage = () => {
  const [language, setLanguage] = useState(
    localStorage.getItem("selected_language") || Languages.EN
  );

  return { language, setLanguage } as const;
};
