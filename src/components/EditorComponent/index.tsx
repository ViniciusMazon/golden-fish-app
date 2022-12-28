import CodeMirror from '@uiw/react-codemirror';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { languages } from '@codemirror/language-data';
import { gruvboxDark } from "@uiw/codemirror-themes-all";
import { historyField } from '@codemirror/commands';

import "./styles.css"


interface EditorComponentProps {
    document: string;
    setDocument: Function;
}

const stateFields = { history: historyField };

export const EditorComponet = ({ document, setDocument }: EditorComponentProps) => {
    const serializedState = localStorage.getItem('myEditorState');
    const value = localStorage.getItem('myValue') || '';


    return (
        <div id="editor">
            <CodeMirror
                value={document || ""}
                height="100%"
                width="100%"
                initialState={
                    serializedState
                        ? {
                            json: JSON.parse(serializedState || ''),
                            fields: stateFields,
                        }
                        : undefined
                }
                onChange={(value, viewUpdate) => {
                    localStorage.setItem('myValue', value);

                    const state = viewUpdate.state.toJSON(stateFields);
                    localStorage.setItem('myEditorState', JSON.stringify(state));
                    setDocument(value);
                }}

                theme={gruvboxDark}
                extensions={[markdown({ base: markdownLanguage, codeLanguages: languages })]}
            />
        </div>
    )
}
