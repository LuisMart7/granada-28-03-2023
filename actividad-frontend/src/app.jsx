import { Header } from "./components/header";
import { Placeholder } from "./components/placeholder";
import { Ranking } from "./components/ranking";
import "./app.css";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <div className="summary">
          {/* TODO: Ejercicio 2 - Crear el componente resumen  */}
          <Placeholder />
        </div>
        <div className="ranking">
          <Ranking/>
        </div>
      </div>
    </div>
  )
}

export default App;
