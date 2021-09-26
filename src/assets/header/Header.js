import React from "react"
import Logo from "../imagens/logo/logo-corebiz.png" /* Importando a logo do menu*/
import "../header/Header.css" /*Importando o css*/





export default function Header() {
    return(

        <header className="inicio">
            <img src={Logo} className="logo" alt="imagen da logo Coribiz branca"/> {/*Imagem da logo*/} 
            <ul className="menu-list">

                <div className="icon cancel-btn"  >
                    <i class="fas fa-times"></i>
                </div>
                    <li><a href="https://www.corebiz.ag/pt/about/" target="_blank">a corebiz</a></li> {/*MENU*/}
                    <li><a href="https://www.corebiz.ag/pt/#framework-title" target="_blank">serviços</a></li>
                    <li><a href="https://www.corebiz.ag/pt/cases/" target="_blank">cases</a></li>
                    <li><a href="https://www.corebiz.ag/pt/contato/" target="_blank">contato</a></li>
            </ul>
                <div className="icon menu-btn"  >
                    <i class="fas fa-bars"></i>
                </div>
             
                    
        </header>

    )
}