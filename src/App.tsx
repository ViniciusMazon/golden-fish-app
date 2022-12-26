import './App.css';
import { FileExplorerComponent } from './components/FileExplorerComponent';
import { MenuBarComponent } from './components/MenuBarComponent';
import { DockProvider } from './context/Dock';

function App() {

  return (
    <DockProvider>
      <div className="App">
        <header className="App-header">
          <MenuBarComponent />
          <FileExplorerComponent />
        </header>
      </div>
    </DockProvider>
  );
}

export default App;
