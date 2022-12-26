import React from 'react';
import './App.css';
import { FileExplorerComponent } from './components/FileExplorerComponent';
import { MenuBarComponent } from './components/MenuBarComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MenuBarComponent />
        <FileExplorerComponent />
      </header>
    </div>
  );
}

export default App;
