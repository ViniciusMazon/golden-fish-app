import './App.css';
import { FileExplorerComponent } from './components/FileExplorerComponent';
import { MenuBarComponent } from './components/MenuBarComponent';
import { DockProvider } from './context/Dock';
import { Toaster } from 'react-hot-toast';
import { EditorComponet } from './components/EditorComponent';
import React from 'react';

const App: React.FC = () => {
  const onChange = React.useCallback((value: any, viewUpdate: any) => {
    console.log('value:', value);
  }, []);

  return (
    <DockProvider>
      <div className="App">
        <Toaster />
        <header className="App-header">
          <MenuBarComponent />
          <FileExplorerComponent />
          <EditorComponet onChange={onChange} />
        </header>

      </div>
    </DockProvider>
  );
}

export default App;
