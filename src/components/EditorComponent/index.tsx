import CodeMirror from '@uiw/react-codemirror';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { languages } from '@codemirror/language-data';
import { gruvboxDark, materialDark } from "@uiw/codemirror-themes-all";
import "./styles.css"
import { useDocument } from '../../context/Document';
import { useEffect } from 'react';
import { documentService } from "../../services/DocumentService";

export const EditorComponent = () => {
    const { currentDocument, setCurrentDocument } = useDocument();

    useEffect(() => {
        if (!currentDocument) return;
        const id = setTimeout(() => {
            console.log("Document saved!");
            console.log(currentDocument);
            documentService.update(currentDocument.id, currentDocument);
        }, 2000);
        return () => {
            clearTimeout(id);
        }
    }, [currentDocument]);

    return (
        <div id="editor">
            <CodeMirror
                value={currentDocument?.content || ""}
                height="100%"
                width="100%"
                onChange={(value) => {
                    if (!currentDocument) {
                        return;
                    }

                    setCurrentDocument({...currentDocument, content: value});
                }}

                theme={materialDark}
                extensions={[markdown({ base: markdownLanguage, codeLanguages: languages })]}
            />
        </div>
    )
}
