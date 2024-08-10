import React, { useState, useRef } from 'react';
import { IoIosCloseCircleOutline } from "react-icons/io";
import classNames from 'classnames';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

function Ide() {
    const [active, setActive] = useState("code");
    const [code, setCode] = useState("");
    const editorRef = useRef(null);

    const handleInput = () => {
        const text = editorRef.current.innerText;
        setCode(text);

        // Code block renklendirme (üç ``` ile)
        const codeBlockRegex = /```([\s\S]*?)```/g;
        let coloredText = text.replace(codeBlockRegex, '<pre class="text-red-200 ">```$1```</pre>');

        // Inline code renklendirme (tek ` ile)
        const inlineCodeRegex = /`([^`]+)`/g;
        coloredText = coloredText.replace(inlineCodeRegex, '<span class="text-red-500">`$1`</span>');

        // Başlıkları (#) renklendirme
        const headerRegex = /^(#{1,6})\s(.+)$/gm;
        coloredText = coloredText.replace(headerRegex, '<span style="color: #f87171;">$1 $2</span>');

        // Yapılandırılmış listeyi (-, *, +) renklendirme
        const listRegex = /^(\*|-|\+)\s(.+)$/gm;
        coloredText = coloredText.replace(listRegex, '<span style="color: #4ade80;">$1 $2</span>');

        // Numaralı listeyi (1., 2.) renklendirme
        const orderedListRegex = /^(\d+)\.\s(.+)$/gm;
        coloredText = coloredText.replace(orderedListRegex, '<span style="color: #fdba74;">$1. $2</span>');

        // Önce bold metinleri renklendir
        const boldRegex = /(__[^_]+__|\*\*[^*]+\*\*)/g;
        coloredText = coloredText.replace(boldRegex, (match) => {
            return `<span style="color: #f59e0b; font-weight: bold;">${match}</span>`;
        });

        // İtalik metinler için önce iki yıldız işaretine sahip olanları işleyin
        const italicBoldRegex = /(__[^_]+__|\*\*[^*]+\*\*)/g;
        coloredText = coloredText.replace(italicBoldRegex, (match) => {
            return `<span style="color: #3b82f6; font-weight: bold;">${match}</span>`;
        });

        // Ardından, italic metinleri işleyin (bir yıldız veya alt çizgi ile)
        const italicRegex = /(_[^_]+_|[^*]\*[^*]+\*)/g;
        coloredText = coloredText.replace(italicRegex, (match) => {
            return `<span style="color: #a78bfa;">${match}</span>`;
        });

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
        <div className='relative rounded shadow-2xl shadow-tert h-[300px] w-full z-20 bg-fourth dark:bg-primary overflow-y-scroll scrollbar scrollbar-thumb-secondary scrollbar-track-fourth dark:scrollbar-track-primary'>
            <div className='p-6'>
                <div className='w-full flex items-center justify-between'>
                    <div className='flex items-start justify-between gap-4'>
                        <button onClick={() => setActive("code")} className={classNames({
                            'uppercase font-bold tracking-widest text-primary dark:text-fourth': true,
                            'underline': active === "code"
                        })}>Code</button>
                        <button onClick={() => setActive("output")} className={classNames({
                            'uppercase font-bold tracking-widest text-primary dark:text-fourth': true,
                            'underline': active === "output"
                        })}>Output</button>
                    </div>
                    <button onClick={() => setCode("")}><IoIosCloseCircleOutline className='text-2xl text-red-400 transition-all hover:text-red-600 cursor-pointer' /></button>
                </div>
                <div className='w-full h-[1px] bg-tert my-4'></div>
                {active === "code" &&
                    <div>
                        <div
                            ref={editorRef}
                            contentEditable
                            onInput={handleInput}
                            className='w-full bg-fourth dark:bg-primary dark:text-fourth text-sm text-primary tracking-wider focus:outline-none whitespace-pre-wrap'
                        />
                    </div>}

                {active === "output" &&
                    <div className='w-full h-full bg-tert dark:bg-primary p-4'>
                        <ReactMarkdown
                            children={code}
                            remarkPlugins={[remarkGfm]}
                            skipHtml={false}
                            className='prose prose-invert text-primary dark:text-fourth'
                        />
                    </div>}
            </div>
        </div>
    );
}

export default Ide;
