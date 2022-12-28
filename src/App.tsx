import './App.css';
import { FileExplorerComponent } from './components/FileExplorerComponent';
import { MenuBarComponent } from './components/MenuBarComponent';
import { DockProvider } from './context/Dock';
import { Toaster } from 'react-hot-toast';
import { EditorComponet } from './components/EditorComponent';
import React, { useState } from 'react';
import { PreviewComponent } from './components/PreviewComponent';

const App: React.FC = () => {
  const [document, setDocument] = useState<string>("");

  const onChange = React.useCallback((value: any, viewUpdate: any) => {
    setDocument(value);
  }, []);

  return (
    <DockProvider>
      <div className="App">
        <Toaster />
        <header className="App-header">
          <MenuBarComponent />
          <FileExplorerComponent />
          <EditorComponet document={document} onChange={onChange} />
          <PreviewComponent document={document} />
        </header>

      </div>
    </DockProvider>
  );
}

export default App;
