import { Link } from "react-router-dom";
import { LanguagePicker } from "../../components/LanguagePicker/LanguagePicker";
import { Page } from "../../components/Page/Page";

import "./SelectLanguagePage.scss";

export const SelectLanguagePage = () => {
  const className = "selectLanguagePage";

  return (
    <Page>
      <div className={`${className}__container`}>
        <h1>Select Language</h1>

        <LanguagePicker />
      </div>
      <Link className={`${className}__back-btn`} to="/">
        Go Back
      </Link>
    </Page>
  );
};
