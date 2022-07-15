import Nav from "./components/nav"
import Products from "./pages/Products"
import About from "./pages/About"
import Contact from "./pages/Contact"

function App() {
  switch (window.location.pathname){
    case "/":
      Component = App
      break
    case "/products":
      Component = Products
      break
    case "/about":
      Component = About
      break
    case "/contact":
      Component = Contact
      break
  }
  return (
    <>
    <Nav />
    <Component />
    </>
  )
}

export default App;