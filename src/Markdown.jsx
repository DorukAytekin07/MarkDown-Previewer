import { useState } from "react";
import ReactMarkdown from "react-markdown";
export default function Markdown(){
    const txt= '## This is some markdown\n### Consider making your own\n\n#### List items\n- C++\n- Python\n- Javascript\n- Java\n\n#### Make it **bold** or make it *italic*\n\n#### Create links [Github](https://github.com/dorukaytekin07)'
    const [markDownText,setMarkDownText] = useState(txt)
    return(
        <div>
            <h1>MarkDown Previewer</h1>
            <div>
                <textarea id="editor" value={markDownText} 
                    onChange={(e) => setMarkDownText(e.target.value)}>
                </textarea>
                <div>
                    <ReactMarkdown>{markDownText}</ReactMarkdown>
                </div>
            </div>
        </div>
    )
}