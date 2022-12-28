import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import "./styles.css";

interface Props {
    document: string;
}

export const PreviewComponent = ({ document }: Props) => {
    return (
        <div id="preview">
            <ReactMarkdown
                remarkPlugins={[gfm]}
            >{document}</ReactMarkdown>
        </div>
    )
}