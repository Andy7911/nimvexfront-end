
'use client';
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from "next/link";

import React from 'react'
import img from '../../../public/img/logo.png'

import handPhone from '../../../public/img/workplace-mobile-app-hands.jpg'
import WebClient from '../../../public/img/webClient.jpg'
import seoPhoto from '../../../public/img/seo.jpeg'
import { useRouter } from "next/router";
import franceFlag from "../../../public/img/france.png"
import London from "../../../public/img/united-kingdom-flag.png"
export default function Nav() {
  const [submenuOpen, setOpenSubmenus] = useState({
    services: false,
    UseCase: false,
    hamMenu: true,
  })

  const [closeNav, setClose] = useState()


  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);
  const [width, setWith] = useState();

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      // Scrolling down
      console.log(window.scrollY)
      setShowNavbar(false);
    } else {
      // Scrolling up
      setShowNavbar(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {


    window.addEventListener('scroll', handleScroll);
    function handleResize() {


      setWith(window.innerWidth);


    }
    if (submenuOpen.services && width <720) {
      document.body.style.overflow = 'hidden';
    }
    else {
      document.body.style.overflow = '';
    }
    function hideNav() {

      if (width < 720) {
        setOpenSubmenus((prev) => ({
          ...prev,
          hamMenu: false,
        }));

      }
      if (width > 720) {
        setOpenSubmenus((prev) => ({
          ...prev,
          hamMenu: true,
        }));

      }
      return () => {
        document.body.style.overflow = '';
      };

    }
    handleResize()
    hideNav();

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [width, lastScrollY]);

  console.log(width)
  const toggleSubmenu = (menu) => {

    setOpenSubmenus((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu], // Basculer l'état du sous-menu sélectionné
    }));
  };
  return (
    <div className={`nav ${showNavbar ? 'visible' : 'hidden'}`}>
      <div className='nav__logo'>
        <a href='/'>
          <Image src="http://localhost:1337/uploads/Screenshot_2025_02_14_at_12_18_41_PM_5a71e8648d.png" width={219} height={36} alt='image' />
        </a>
      </div>
      <div className='nav__toogle' onClick={() => toggleSubmenu('hamMenu')}>
        <span>

        </span>
        <span>

        </span>
        <span>

        </span>
      </div>
      <div className={`nav__menu ${submenuOpen.hamMenu ? 'visible' : 'hidden'}`}>
        <ul className='nav__bar'>
          <li className='nav__bar_link'> <a href='/about'>About us</a></li>
          <li className={`nav__bar_link ${submenuOpen.services ?'rotation':''}`}><a href='#' onClick={() => toggleSubmenu('services')}>Service</a>
          <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z" fill="#0F0F0F"/>
</svg>
            {submenuOpen.services && (
              <ul className='nav__sub-menu' >
                <li>
                  <Image width={250} src={WebClient} alt='img' />

                  <a href='/services'>Web developpement</a></li>
                <li>
                  <Image width={250} src={handPhone} alt='web' />


                  <a href='/services' >Mobile developpement</a></li>
                <li>
                  <Image width={250} src={seoPhoto} alt='wevb' />


                  <a> SEO </a>
                </li>

              </ul>)}

          </li>
          <li className='nav__bar_link'><a href='/cases'>Use Cases</a></li>

          <li className='nav__bar_link'><a href='/blog'>Blog</a></li>


        </ul>

        <div className="nav__lang">
          {/* <p>{locale === 'fr' ? 'Bienvenue' : 'Welcome'}</p> */}
          <Image onClick={() => switchLanguage('en')} src={London} alt='en' />
          <Image onClick={() => switchLanguage('fr')} src={franceFlag} alt='fr' />
        </div>
      </div>

    </div>
  )
}
