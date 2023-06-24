import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Button } from "@chakra-ui/react";
import logo from "../assets/logoTienda.png";

function NavBar() {
  return (
    <div className="formatNavbar">
      <div className="centerItem">
        <img src={logo} alt="logoTienda" />
      </div>
      <div className="buttonsNavbar">
        <Button colorScheme="blackAlpha">HOMBRE</Button>
        <Button colorScheme="blackAlpha">MUJER</Button>
        <Button colorScheme="blackAlpha">ACCESORIOS</Button>
      </div>
      <div className="centerItem">
        <CartWidget />
      </div>
    </div>
  );
}

export default NavBar;
