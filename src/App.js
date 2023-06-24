import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
        <NavBar />
        <ItemListContainer greeting="BIENVENIDO A Mi-Tienda" />
    </ChakraProvider>
  );
}

export default App;
