import enFlag from "../../assets/en.png";
import itFlag from "../../assets/it.png";
import deFlag from "../../assets/de.png";
import daFlag from "../../assets/da.png";
import companyLogo from "../../assets/logo.png";
import helpIcon from "../../assets/help-icon.svg";
import { Languages } from "../../types/Languages";
import { useLanguage } from "../../hooks/useLanguage";
import { Link } from "react-router-dom";
import { ROUTES } from "../../types/Routes";
import { useEffect } from "react";

import "./Header.scss";

export const Header = () => {
  const className = "header";
  const { language, setLanguage } = useLanguage();

  const isLanguageEnglish = language === Languages.EN;
  const isLanguageItalian = language === Languages.IT;
  const isLanguageGerman = language === Languages.DE;
  const isLanguageDanish = language === Languages.DA;

  useEffect(() => {
    setLanguage(language);
  }, [language, setLanguage]);

  return (
    <header className={className}>
      <div className={`${className}__container`}>
        <img src={companyLogo} alt="tjekvik" className={`${className}__logo`} />
      </div>

      <div className={`${className}__right-container`}>
        <button className={`${className}__help`}>
          <img src={helpIcon} alt="" />
          <span>Need help?</span>
        </button>

        <Link
          to={ROUTES.SELECT_LANGUAGE}
          className={`${className}__languages-btn`}
        >
          {isLanguageEnglish && (
            <>
              <img
                src={enFlag}
                alt=""
                className={`${className}__flag en-flag`}
              />
              <span>EN</span>
            </>
          )}

          {isLanguageItalian && (
            <>
              <img
                src={itFlag}
                alt=""
                className={`${className}__flag it-flag`}
              />
              <span>IT</span>
            </>
          )}

          {isLanguageGerman && (
            <>
              <img
                src={deFlag}
                alt=""
                className={`${className}__flag de-flag`}
              />
              <span>DE</span>
            </>
          )}

          {isLanguageDanish && (
            <>
              <img
                src={daFlag}
                alt=""
                className={`${className}__flag da-flag`}
              />
              <span>DA</span>
            </>
          )}
        </Link>
      </div>
    </header>
  );
};
