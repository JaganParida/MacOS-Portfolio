import React from "react";
import "./nav.scss";
import DateTime from "./DateTime";
import { BatteryMedium, Search, Wifi } from "lucide-react";

const Nav = () => {
  return (
    <nav>

      <div className="left">
        <div className="nav-item apple-icon">
          <img src="/navbar-icons/apple.svg" alt="Apple" />
        </div>

        <div className="nav-item app-name">
          <p>Jagan Parida</p>
        </div>

        <div className="nav-item">
          <p>File</p>
        </div>
        <div className="nav-item">
          <p>Edit</p>
        </div>
        <div className="nav-item">
          <p>View</p>
        </div>
        <div className="nav-item">
          <p>Go</p>
        </div>
        <div className="nav-item">
          <p>Window</p>
        </div>
        <div className="nav-item">
          <p>Help</p>
        </div>
      </div>

      <div className="right">

        <div className="nav-icon">
          <BatteryMedium size={18} />
        </div>
        <div className="nav-icon">
          <Wifi size={18} />
        </div>
        <div className="nav-icon">
          <Search size={16} />
        </div>

        <div className="nav-item date-time">
          <DateTime />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
