import React, { useState, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import 'tailwindcss/tailwind.css'; // Tailwind CSS'i kullanıyoruz

function MdEditor() {
    const [active, setActive] = useState("code");
    const [code, setCode] = useState("");
    const editorRef = useRef(null);

    const handleInput = () => {
        const text = editorRef.current.innerText;
        setCode(text);

        // Renkleri ayarlamak için Regex ve Tailwind CSS kullanacağız
        let coloredText = text
            .replace(/```([\s\S]*?)```/g, '<pre class="text-pink-500 font-mono">```$1```</pre>') // Code blocks
            .replace(/`([^`]+)`/g, '<span class="text-pink-500 font-mono">`$1`</span>') // Inline code
            .replace(/^(#{1,6})\s(.+)$/gm, '<span class="text-red-500">$1 $2</span>') // Headers
            .replace(/^(\*|-|\+)\s(.+)$/gm, '<span class="text-green-500">$1 $2</span>') // Unordered lists
            .replace(/^(\d+)\.\s(.+)$/gm, '<span class="text-yellow-500">$1. $2</span>') // Ordered lists
            .replace(/(__[^_]+__|\*\*[^*]+\*\*)/g, '<span class="font-bold text-orange-500">$1</span>') // Bold
            .replace(/(_[^_]+_|[^*]\*[^*]+\*)/g, '<span class="italic text-purple-500">$1</span>'); // Italic

        // İçeriği güncelleme
        editorRef.current.innerHTML = coloredText;

        // Caret pozisyonunu sonuna taşı
        const range = document.createRange();
        range.selectNodeContents(editorRef.current);
        range.collapse(false);
        const sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
    };

    return (
        <div className='w-full flex flex-col md:flex-row md:gap-12 my-12'>

            <div className='w-full md:w-1/2 flex flex-col items-start gap-2'>
                <h2 className="uppercase font-bold tracking-widest text-lg dark:text-primary">Code</h2>
                <div
                    ref={editorRef}
                    contentEditable
                    onInput={handleInput}
                    className='w-full h-[300px] desktop:h-[600px] bg-fourth text-primary dark:bg-primary dark:text-fourth p-4 rounded focus:outline-none overflow-y-scroll whitespace-pre-wrap scrollbar scrollbar-thumb-secondary scrollbar-track-fourth dark:scrollbar-track-primary'
                    style={{ whiteSpace: 'pre-wrap', overflowWrap: 'break-word' }} // Allow wrapping and newline characters
                />
            </div>

            <div className='w-full md:w-1/2 flex flex-col items-start gap-2'>
                <h2 className="uppercase font-bold tracking-widest text-lg dark:text-primary">Output</h2>
                <div className='w-full h-[300px] desktop:h-[600px] bg-fourth text-primary dark:bg-primary dark:text-fourth p-4 rounded overflow-y-scroll overflow-x-hidden scrollbar scrollbar-thumb-secondary scrollbar-track-fourth dark:scrollbar-track-primary'>
                    <ReactMarkdown
                        children={code}
                        remarkPlugins={[remarkGfm]}
                        className='prose prose-invert text-primary dark:text-fourth'

                    />
                </div>
            </div>

        </div>
    );
}

export default MdEditor;
