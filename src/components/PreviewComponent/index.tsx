import ReactMarkdown from 'react-markdown';
import "./styles.css";

interface Props {
    document: string;
}

export const PreviewComponent = ({ document }: Props) => {
    return (
        <div id="preview">
            <ReactMarkdown>{document}</ReactMarkdown>
        </div>
    )
}