import { createRef } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const linksArray = [
  {
    path: 'trending',
    text: 'TRENDING',
  },
  {
    path: 'search',
    text: 'SEARCH',
  }
]

export default function Navbar() {

  const appNav = createRef();
  const navToggle = createRef();

  const toggleNavigation = () => {
    appNav.current.classList.toggle('nav-visible')
    navToggle.current.classList.toggle('nav-toggle-active')
  }

  return (
    <header className="app-header flex">
      <nav>
        <button
          ref={navToggle}
          className="mobile-nav-toggle"
          aria-controls="app-navigation"
          onClick={toggleNavigation}
        />
        <ul ref={appNav} id="app-navigation" className="app-navigation flex" >
          {linksArray.map((link) => {
            return <li key={link.path}><Link id="navigation-link" className="navigation-link" to={link.path}>{link.text}</Link></li>
          })}
        </ul>
      </nav>
      <div className="logo">Logo</div>
    </header>
  );
}
