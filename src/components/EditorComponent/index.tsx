import CodeMirror from '@uiw/react-codemirror';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { languages } from '@codemirror/language-data';
import { gruvboxDark } from "@uiw/codemirror-themes-all"
import "./styles.css"


interface EditorComponentProps {
    document: string;
    onChange: (value: any, viewUpdate: any) => void;
}

export const EditorComponet = ({document, onChange }: EditorComponentProps) => {
    return (
        <div id="editor">
            <CodeMirror
                value={document || ""}
                height="100%"
                width="100%"
                onChange={onChange}
                theme={gruvboxDark}
                extensions={[markdown({ base: markdownLanguage, codeLanguages: languages })]}
            />
        </div>
    )
}
