import { Languages } from "../../types/Languages";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../hooks/useLanguage";
import { ROUTES } from "../../types/Routes";
import daFlag from "../../assets/da.png";
import enFlag from "../../assets/en.png";
import itFlag from "../../assets/it.png";
import deFlag from "../../assets/de.png";

import "./LanguagePicker.scss";

export const LanguagePicker = () => {
  const className = "language-picker";
  const { setLanguage } = useLanguage();
  const navigate = useNavigate();

  const saveLanguage = (lang: Languages) => {
    localStorage.setItem("selected_language", lang);
    setLanguage(lang);
    navigate(ROUTES.HOME);
  };

  return (
    <div className={className}>
      <button className="en-btn" onClick={() => saveLanguage(Languages.EN)}>
        <img src={enFlag} alt="" />
        <h4>English</h4>
        <p>English</p>
      </button>

      <button className="it-btn" onClick={() => saveLanguage(Languages.IT)}>
        <img src={itFlag} alt="" />
        <h4>Italiano</h4>
        <p>Italian</p>
      </button>

      <button className="de-btn" onClick={() => saveLanguage(Languages.DE)}>
        <img src={deFlag} alt="" />
        <h4>Deutsch</h4>
        <p>German</p>
      </button>

      <button className="da-btn" onClick={() => saveLanguage(Languages.DA)}>
        <img src={daFlag} alt="" />
        <h4>Dansk</h4>
        <p>Danish</p>
      </button>
    </div>
  );
};
