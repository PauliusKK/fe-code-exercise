import checkInIcon from "../../assets/check-in-icon.svg";
import checkOutIcon from "../../assets/check-out-icon.svg";
import noAppointmentIcon from "../../assets/calendar-icon.svg";
import warningIcon from "../../assets/warning-icon.svg";

import "./ExpressSelfServicePage.scss";
import { Page } from "../../components/Page/Page";

export const ExpressSelfServicePage = () => {
  const className = "ExpressSelfServicePage";

  return (
    <Page>
      <div className={className}>
        <h3>Welcome to</h3>
        <h1>Express Self-Service</h1>

        <div className={`${className}__box-container`}>
          <div className={`${className}__box`}>
            <img src={checkInIcon} alt="" />
            <h4>Check In</h4>
            <p>Use Kiosk to check-in your car</p>
          </div>

          <div className={`${className}__box`}>
            <img src={checkOutIcon} alt="" />
            <h4>Check Out</h4>
            <p>Use Kiosk to check out your car</p>
          </div>

          <div className={`${className}__box`}>
            <img src={noAppointmentIcon} alt="" />
            <h4>No Appointment?</h4>
            <p>Create Appointment</p>
          </div>
        </div>

        <div className={`${className}__disclaimer`}>
          <img src={warningIcon} alt="Warning" />
          <p>
            Please remember to remove all the items you need today from the
            vehicle before starting the check in process.
          </p>
        </div>
      </div>
    </Page>
  );
};
