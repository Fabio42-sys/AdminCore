import { useState } from "react";
import { useLocation } from "react-router-dom";
import { DEFAULT_TITLE, NAV_ITEMS } from "../navItems";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaCogs, FaBell } from "react-icons/fa";
import "../styles/Header.css";

export default function Header() {
  const { pathname } = useLocation();
  const [searchFocused, setSearchFocused] = useState(false);

  const title =
    NAV_ITEMS.find((item) => item.path === pathname)?.label ?? DEFAULT_TITLE;

  return (
    <header>
      <nav className="headerNav">
        <h1 key={title} id="pageTitle" className="animation">
          {title}
        </h1>

        <div className="scapeUtils">
          <div
            className={`containerSearch ${searchFocused ? "containerSearchFocus" : ""}`}
          >

            <FaMagnifyingGlass className="searchIcon" aria-hidden="true" />

            <input
              className="searchBar"
              type="text"
              placeholder="Pesquisar..."
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
            />
          </div>

          <FaBell className="fastScape" aria-hidden="true" />
          <FaCogs className="fastScape" aria-hidden="true" />
        </div>
      </nav>
    </header>
  );
}