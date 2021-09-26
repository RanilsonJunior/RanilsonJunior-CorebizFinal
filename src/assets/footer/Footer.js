import React from "react" 
import "../footer/Footer.css" /*Importando o css*/
import LogoFooter from "../imagens/logo/logo-corebiz-global.png" /*Importando a logo do footer*/
import IconFacebook from "../imagens/elements/Icon-facebook.png"
import IconInstagram from "../imagens/elements/Icon-instagram.png"
import IconLinkedin from "../imagens/elements/Icon-linkedin.png"



export default function Footer01() {
    return(
        <footer className="fundo">
            <div className="branco1"> {/*Primeiro bloco lado branco*/}
                <img src={LogoFooter} alt="imagen da logo Coribiz preta" className="logoFooter" /><br/> {/*Imagem da logo*/}
                <span className="letraPequena">direitos reservados, corebiz 2021</span><br/>
                <a href=""><img src={IconFacebook} alt="Icone do facebook" className="face"/></a>
                <a href=""><img src={IconInstagram} alt="Icone do instagram" className="insta"/></a>
                <a href="https://www.linkedin.com/in/ranilson-de-andrade-saraiva-junior/" target="_blank"><img src={IconLinkedin} alt="Icone do linkedin" className="linke"/></a>
            </div>

            <div className="branco2" > {/*Segundo bloco lado branco*/}
                    <li><a href="https://www.corebiz.ag/pt/about/" target="_blank">a corebiz</a><br/></li>
                    <li><a href="https://www.corebiz.ag/pt/#framework-title" target="_blank">serviços</a><br/></li>
                    <li><a href="https://www.corebiz.ag/pt/cases/" target="_blank">cases</a><br/></li>
                    <li><a href="https://www.corebiz.ag/pt/contato/" target="_blank">contato</a></li>
         
            </div>

            <div className="cinza1"> {/*Primeiro bloco lado cinza*/}
                <h3>.Brasil</h3>
                <p className="letraPequena">Avenida Andrômeda,<br/>2000. Bloco 6 e 8 Alphaville SP<br/></p><br/>
                <p className="letraPequena2">R. Ifigenia Maria de<br/>Oliveira, 3793 Jr.<br/>Piratininga Franca SP</p>    
            </div>

            <div className="cinza2"> {/*Segundo bloco lado cinza*/}
                <h3>.Argentina</h3>
                <p className="letraPequena">Soler 5518, 3 Piso<br/>C1425BYF Palermo<br/>Hollywood CABA</p>
            </div>

            <div className="cinza3"> {/*Terceiro bloco lado cinza*/}
                <h3>.México</h3>
                <p className="letraPequena">Blvd. Miguel de<br/>Cenvantes Saavedra<br/>169, Granada, Miguel<br/>Hidalgo, 11520 Ciudad<br/>de México,CDMX</p>
            </div>

            <div className="cinza4"> 
                <h3>.Chile</h3>
                <p className="letraPequena">Roberto del Rio 1137,<br/>Providencia.</p>
            </div>
        </footer>
    )
}