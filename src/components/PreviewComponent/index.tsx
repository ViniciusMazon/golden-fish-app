import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { useDocument } from "../../context/Document";
import "./styles.css";

export const PreviewComponent = () => {
    const { currentDocument } = useDocument();
    const [preview, setPreview] = useState("");

    useEffect(() => {
        if(!currentDocument) return;
        setPreview(currentDocument.content);
    }, [currentDocument]);

    return (
        <div className="markdown-body">
            <ReactMarkdown
                remarkPlugins={[gfm]}
            >{preview}</ReactMarkdown>
        </div>
    )
}