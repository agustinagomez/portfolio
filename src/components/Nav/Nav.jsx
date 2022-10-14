import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import s from './Nav.module.css'

function Nav() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };  
  return (
    <nav className={s.container}>
        <div className={s.logo} onClick={scrollToTop}>
            <h4>Agustina</h4>
            <h4 className={s.pink}>Gomez</h4>
        </div>
        <ul className={s.sections}>
            <li className={s.section}>
                <Link
                    activeClass={s.active}
                    to="home"
                    spy={true}
                    smooth={true}
                    duration={500}
                >
                    Home
                </Link>
            </li>
            <li className={s.section}>
                <Link
                    activeClass={s.active}
                    to="about"
                    spy={true}
                    smooth={true}
                    duration={500}
                >
                    About
                </Link>
            </li>
            <li className={s.section}>
                <Link
                    activeClass={s.active}
                    to="skills"
                    spy={true}
                    smooth={true}
                    duration={500}
                >
                    Skills
                </Link>
            </li>
            <li className={s.section}>
                <Link
                    activeClass={s.active}
                    to="projects"
                    spy={true}
                    smooth={true}
                    duration={500}
                >
                    Projects
                </Link>
            </li>
            <li className={s.section}>
                <Link
                    activeClass={s.active}
                    to="contact"
                    spy={true}
                    smooth={true}
                    duration={500}
                >
                    Contact
                </Link>
            </li>
        </ul>
        <button className={s.downloadBtn}>DOWNLOAD CV
            <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.1792 9.66669V10.3334C1.1792 10.8638 1.38991 11.3725 1.76499 11.7476C2.14006 12.1226 2.64877 12.3334 3.1792 12.3334H9.84587C10.3763 12.3334 10.885 12.1226 11.2601 11.7476C11.6352 11.3725 11.8459 10.8638 11.8459 10.3334V9.66669M9.1792 7.00002L6.51253 9.66669M6.51253 9.66669L3.84587 7.00002M6.51253 9.66669V1.66669" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
    </nav>
  )
}

export default Nav