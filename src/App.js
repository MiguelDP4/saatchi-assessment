import './App.scss';
import Header from './components/Header';
import Inicio from './components/Inicio';
import Nosotros from './components/Nosotros';
import Empleo from './components/Empleo';
import Servicios from './components/Servicios';
import Contacto from './components/Contacto';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Inicio />
      <Nosotros />
      <Servicios />
      <Empleo />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;
