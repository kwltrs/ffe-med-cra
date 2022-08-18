import { Heading1 } from '@sb1/ffe-core-react';
import { ActionButton } from '@sb1/ffe-buttons-react';
import logo from '@sb1/ffe-sb1-logos/svg/logo-sb1.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Heading1>SpareBank 1 Designsystem</Heading1>
        <ActionButton element="a" href="https://design.sparebank1.no">Besøk vår hjemmeside</ActionButton>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
