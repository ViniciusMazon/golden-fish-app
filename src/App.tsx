import './App.css';
import { FileExplorerComponent } from './components/FileExplorerComponent';
import { MenuBarComponent } from './components/MenuBarComponent';
import { DockProvider } from './context/Dock';
import { Toaster } from 'react-hot-toast';

function App() {

  return (
    <DockProvider>
      <div className="App">
        <Toaster />
        <header className="App-header">
          <MenuBarComponent />
          <FileExplorerComponent />

          <h1>Testeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</h1>
        </header>

      </div>
    </DockProvider>
  );
}

export default App;
