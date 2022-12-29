import './App.css';
import { FileExplorerComponent } from './components/FileExplorerComponent';
import { MenuBarComponent } from './components/MenuBarComponent';
import { DockProvider } from './context/Dock';
import { Toaster } from 'react-hot-toast';
import { EditorComponent } from './components/EditorComponent';
import { PreviewComponent } from './components/PreviewComponent';
import { DocumentProvider } from './context/Document';
import { SearchComponent } from './components/SearchComponent';

const App: React.FC = () => {
  return (
    <DockProvider>
      <DocumentProvider>
        <div className="App">
          <Toaster />
          <header className="App-header">
            <MenuBarComponent />
            <FileExplorerComponent />
            <EditorComponent />
            <PreviewComponent />
            <SearchComponent />
          </header>
        </div>
      </DocumentProvider>
    </DockProvider>
  );
}

export default App;
