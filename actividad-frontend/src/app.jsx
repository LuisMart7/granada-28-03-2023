import { Header } from "./components/header";
import { Placeholder } from "./components/placeholder";
import { Ranking } from "./components/ranking";
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
          <Ranking/>
        </div>
      </div>
    </div>
  )
}

export default App;
