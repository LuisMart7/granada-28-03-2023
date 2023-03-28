import { Header } from "./components/header";
import { Placeholder } from "./components/placeholder";
import "./app.css";
import { Summary } from "./components/summary/style";
import { CartaD } from "./components/summary/carta.jsx";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <div className="summary">
          <CartaD />
        </div>
        <div className="ranking">
          {/* TODO: Ejercicio 3 - Crear el componente ranking  */}
          <Placeholder />
        </div>
      </div>
    </div>
  )
}

export default App;
