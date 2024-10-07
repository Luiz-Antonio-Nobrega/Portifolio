import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { CiCircleChevDown } from "react-icons/ci";
import { Link } from 'react-router-dom';
import './Header.css'


export default function Header() {
    return (
        <section id="start">
          <ul className="background">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <header className='header-container'>
            <h1>Luiz Antonio N. Loureiro</h1>
            <div className='nav-bar'>
              <a className='link' href="https://www.linkedin.com/in/luiz-antonio-nóbrega-loureiro/"><FaLinkedin /></a>
              <a className='link' href="https://github.com/Luiz-Antonio-Nobrega"><FaGithub/></a>
              <Link to="/Portifolio/Contato" className="link contact-btn">Contato</Link>
            </div>
            <a className="about-me-btn" href="#resume"><CiCircleChevDown /></a>
          </header>
        </section>
    )
} 