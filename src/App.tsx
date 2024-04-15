import { ChakraProvider } from "@chakra-ui/react"
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <>
      <ChakraProvider>
        <ThemeProvider>
          <Navbar />
          <Products />
        </ThemeProvider>
      </ChakraProvider>
    </>
  )
}

export default App
