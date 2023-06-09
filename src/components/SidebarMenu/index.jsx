import React from "react";
import Logo from "../../assets/rins.png";
import User from "../../assets/benedito.jpg";
import Notes from "../../assets/notes.svg";
import Prescription from "../../assets/prescription.svg";
import Dialysis from "../../assets/dialysis.svg";
import MedicalRecord from "../../assets/medicalRecord.svg";
import Settings from "../../assets/settings.svg";
import Profile from "../../assets/profile.svg";
import { useLocation } from "react-router-dom";
import "./styles.scss";

export const SidebarMenu = ({ closeMenu, handleCloseMenu }) => {
  const location = useLocation();

  return (
    <div className={closeMenu ? "sidebar active" : "sidebar"}>
      <div className={closeMenu ? "logoContainer active" : "logoContainer"}>
        <img src={Logo} alt="icon" className="logo" />
        <h2 className="title">VidaRenal</h2>
      </div>
      <div
        className={closeMenu ? "burgerContainer active" : "burgerContainer"}
      >
        <div className="burgerTrigger" onClick={handleCloseMenu}></div>
        <div className="burgerMenu"></div>
      </div>
      <div
        className={closeMenu ? "profileContainer active" : "profileContainer"}
      >
        <img src={User} alt="profile" className="profile" />
        <div className="profileContents">
          <p className="name">Benedito da Silva</p>
          <p className="name">Reg: 32.546</p>
        </div>
      </div>
      <div className={closeMenu ? "contentsContainer active" : "contentsContainer"}>
        <ul>
          <li className={location.pathname === "/" ? "active" : ""}>
            <img src={MedicalRecord} alt="MedicalRecord" />
            <a href="/">PRONTUÁRIO</a>
          </li>
          <li className={location.pathname === "/dialysis" ? "active" : ""}>
            <img src={Dialysis} alt="Dialysis" />
            <a href="/dialysis">DIÁLISE</a>
          </li>
          <li className={location.pathname === "/notes" ? "active" : ""}>
            <img src={Notes} alt="Notes" />
            <a href="/notes">NOTAS</a>
          </li>
          <li className={location.pathname === "/prescriptions" ? "active" : ""}>
            <img src={Prescription} alt="Prescription" />
            <a href="/prescription">RECEITUÁRIO</a>
          </li>
          <li className={location.pathname === "/settings" ? "active" : ""}>
            <img src={Settings} alt="Settings" />
            <a href="/settings">CONFIGS</a>
          </li>
          <li className={location.pathname === "/profile" ? "active" : ""}>
            <img src={Profile} alt="Support" />
            <a href="/profile">PERFIL</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
