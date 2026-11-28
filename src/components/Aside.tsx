import { useRef } from "react";
import { NavLink } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { NAV_ITEMS } from "../navItems";
import { useTheme } from "../ThemeContext";
import "../styles/Aside.css";

export default function Aside() {
  const asideRef = useRef<HTMLElement>(null);
  const { theme } = useTheme();


  return (
    <aside ref={asideRef}>
      <img
        src={theme === "dark" ? "/assets/logo-dark.svg" : "/assets/logo-light.svg"}
        alt="AdminCore"
        className="logo"
      />

      <nav id="utils">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `utilsBtn ${isActive ? "selected" : ""}`
              }
            >
              <Icon className="utilsIcon" aria-hidden="true" />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </nav>

      <section id="logoutSection">
        <div className="img">
          <img
            src="/assets/profileImage.jpg"
            alt="Profile Image"
            className="profilePic"
          />
        </div>
        <div className="infosUser">
          <p id="userName">AdminCore</p>
          <button type="button" className="btn logout">
            Sair
          </button>
        </div>
        <FiLogOut className="logoutIcon" aria-hidden="true" />
      </section>
    </aside>
  );
}