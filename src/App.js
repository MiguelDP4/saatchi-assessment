import React from 'react';
import './App.scss';
import Header from './components/Header';
import Inicio from './components/Inicio';
import Nosotros from './components/Nosotros';
import Empleo from './components/Empleo';
import Servicios from './components/Servicios';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import NuestraCultura from './components/NuestraCultura';
import NuestrasAgencias from './components/NuestrasAgencias';

export class App extends React.Component {
  constructor() {
    super();
    this.state = {
      activeTab: 'inicio',
    };
    this.changeTab = this.changeTab.bind(this);
  }

  changeTab(anchor) {
    console.log(this.state);
    this.setState({
      ...this.state,
      activeTab: anchor
    });
  }

  render() {
    const { activeTab } = this.state;
    return (
      <div className="App">
        <Header activeTab={activeTab} changeTab={this.changeTab}/>
        <Inicio />
        <NuestraCultura />
        <Nosotros />
        <Servicios />
        <Empleo />
        <NuestrasAgencias />
        <Contacto />
        <Footer activeTab={activeTab} changeTab={this.changeTab}/>
      </div>
    );
  }

}

export default App;
