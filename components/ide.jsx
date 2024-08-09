import React, { useState, useEffect, useRef } from 'react';
import { IoIosCloseCircleOutline } from "react-icons/io";

function Ide() {
    const [code, setCode] = useState(""); // Saf metin durumu
    const editorRef = useRef(null);

    const handleInput = (e) => {
        const text = e.target.innerText; // innerText ile saf metni alıyoruz
        setCode(text);
    }

    const highlightSyntax = () => {
        if (editorRef.current) {
            const text = editorRef.current.innerText;
            const coloredText = text.replace(/(#\w+)/g, '<span style="color: blue;">$1</span>');
            
            // İçeriği güncelle
            editorRef.current.innerHTML = coloredText;

            // Caret pozisyonunu sonuna taşı
            const range = document.createRange();
            range.selectNodeContents(editorRef.current);
            range.collapse(false);
            const sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(range);
        }
    }

    useEffect(() => {
        highlightSyntax();
    }, [code]);

    return (
        <div className='relative h-full w-full z-20 bg-fourth'>
            <div className='p-6'>
                <div className='w-full flex items-center justify-between'>
                    <h2 className='uppercase font-semibold tracking-widest text-primary'>Try it here</h2>
                    <IoIosCloseCircleOutline className='text-2xl text-red-400 transition-all hover:text-red-600' />
                </div>
                <div className='w-full h-[1px] bg-tert my-4'></div>
                <div>
                    <div 
                        ref={editorRef}
                        contentEditable 
                        onInput={handleInput} 
                        className='w-full bg-fourth text-sm text-primary tracking-wider focus:outline-none'
                        style={{ whiteSpace: 'pre-wrap' }}
                    >
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ide;
