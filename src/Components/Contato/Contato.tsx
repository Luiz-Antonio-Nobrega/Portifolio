import './Contact.css'
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Contato() {
    return (
        <>
            <header className='contact-header'><Link to="/Portifolio/" className='link contact-btn'>Voltar</Link></header>
            <section id='contact' className='contact-container'>
                <h2>Onde você pode me encontrar</h2>
                <p className='contact-num'><FaWhatsapp/> (32) 988257934</p>
                <div className='contacts-div'>
                    <a href="https://www.linkedin.com/in/luiz-antonio-nóbrega-loureiro/"><FaLinkedin/></a>
                    <a href="https://github.com/Luiz-Antonio-Nobrega"><FaGithub /></a>
                </div>
            </section>
        </>
    )
}