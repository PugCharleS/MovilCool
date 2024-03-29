import React from 'react'
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillShopping } from "react-icons/ai";
import { HiHome } from "react-icons/hi";
import { FaMobileAlt, FaHeadphones, FaUserAlt, FaTiktok} from "react-icons/fa";
import { FiPercent, FiMessageCircle} from "react-icons/fi";
import { HiUserCircle, HiShoppingCart } from "react-icons/hi";
import { RiInstagramFill, RiFacebookBoxFill } from "react-icons/ri";
import './NavBar.scss'

export const NavBar = () => {
    let count = 0 
    function disableScroll(){  
        window.scrollTo(0, 0);
    }
    function desplegarMenu(){
        if(count === 0){
            const elem = document.getElementById('body-menu-container');
            const elem2 = document.getElementById('body-menu');
            elem.style.left = '0';
            elem.style.background = 'rgba(0, 0, 0, 0.466)'
            elem2.style.left = '0';
            window.addEventListener('scroll', disableScroll);
            count++
        }
        else{
            const elem = document.getElementById('body-menu-container');
            const elem2 = document.getElementById('body-menu');
            elem.style.left = '-100%';
            elem2.style.left = '-100%';
            window.removeEventListener('scroll', disableScroll);
            count--
        }
    }
  return (
    <div id="header-container"> 
        <div className="header"> 
            <div className="icon-menu"> 
                <AiOutlineMenu className='icon' onClick={desplegarMenu}/>  
            </div>
            <div className="logo"> 
                <img src="./img/logo/logo-movilcool-color.png"/>
            </div>
            <div className="search"> 
                <AiOutlineSearch className='icon'/>  
            </div>
        </div>
        <div id="body-menu-container">
            <div id="body-menu">
                <div className="header">
                    <img src="./img/logo/logo-movilcool-color.png"/>
                    <AiOutlineClose className='icon' onClick={desplegarMenu}/> 
                </div>
                <div className="body">
                    <ul>
                        <li><HiHome className='icon' /><div>Inicio</div></li>
                        <li><FaMobileAlt className='icon' /><div>Celulares</div></li>
                        <li><FaHeadphones className='icon' /><div>Accesorios</div></li>
                        <li><FiPercent className='icon' /><div>Promociones</div></li>
                        <li><FiMessageCircle className='icon' /><div>Contacto</div></li>
                    </ul>
                    <ul>
                        <li><HiUserCircle className='icon' /><div>Mi perfil</div></li>
                        <li><HiShoppingCart className='icon' /><div>Carrito</div></li>
                    </ul>
                    <ul>
                        <li><AiFillShopping className='icon' /><div>Estado de pedido</div></li>
                        <li><FaUserAlt className='icon' /><div>Iniciar Sesion/Registro</div></li>
                    </ul>
                    <ul>
                        <div id='redes' className='icon-text'>
                            <p>¡Siguenos en nuestras redes!</p>
                            <div>
                                <FaTiktok className='icon-redes' />
                                <RiInstagramFill className='icon-redes' />
                                <RiFacebookBoxFill className='icon-redes' />
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    </div> 
  )
}
