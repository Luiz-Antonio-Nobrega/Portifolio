import './Contact.css'
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from 'react-icons/fa';

export default function Contato() {
    return (
        <section id='contact' className='contact-container'>
            <h2>Onde você pode me encontrar</h2>
            <p><FaWhatsapp/> (32) 988257934</p>
            <a href="https://www.linkedin.com/in/luiz-antonio-nóbrega-loureiro/"><FaLinkedin/></a>
            <a href="https://github.com/Luiz-Antonio-Nobrega"><FaGithub /></a>
            <a href=""><FaInstagram /></a>
        </section>
    )
}