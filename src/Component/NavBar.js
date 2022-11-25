import "../Styles/navBar.css";
import Logo from "../img/Logo-SuperPig.png"
import { GiIfrit, GiBatMask, GiAura, GiAmbulance, GiInfo, GiVibratingSmartphone } from "react-icons/gi";


const NavBar = () => {

  return (
    <div className="navBarItems">

    <a href="/"> 
      <h1 className="Tittle"><img src={Logo} alt="logo" className="logo" /> SuperPig </h1>
    </a>
        
          {/* <a href="/"> <img src={Logo} alt="Logo SuperPig" /></a> */}
          <ul className="navProductos">
            <li className="navLinks">
              <a href="/"><i><GiIfrit/></i>Figuras</a>
            </li>
            <li className="navLinks">
              <a href="/"><i><GiBatMask/></i>Comics</a>
            </li>
            <li className="navLinks">
              <a href="/"><i><GiAura/></i>Mangas</a>
            </li>
            <li className="navLinks">
              <a href="/"><i><GiAmbulance/></i> Juguetes</a>
            </li>
          </ul>  
          <ul className="about">
            <li className="navAbout">
              <a href="/"><i><GiInfo/></i> About</a>
            </li>
            <li className="navAbout">
              <a href="/"><i><GiVibratingSmartphone/></i> Contact</a>
            </li>
            <li className="navAbout">
              <a href="/">Sing up</a>
            </li>  
          </ul>       
          
      
    </div>
  )
}
export default NavBar