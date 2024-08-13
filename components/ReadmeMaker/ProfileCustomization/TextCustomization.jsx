import React, { useState, useRef, useEffect } from 'react';

function TextCustomization({ setText }) {
    const [text, setTextState] = useState('');
    const [align, setAlign] = useState('left');
    const textareaRef = useRef(null);

    useEffect(() => {
        const markdownText = `<p align="${align}">${text}</p>`;
        setText(markdownText);
    }, [text, align, setText]);

    const handleTextChange = (e) => {
        setTextState(e.target.value);
    };

    const handleAlignChange = (e) => {
        setAlign(e.target.value);
    };

    return (
        <div className="flex flex-col pt-6">
            <label htmlFor="customText" className="block font-medium text-primary dark:text-fourth">
                Enter Text
            </label>
            <textarea
                id="customText"
                ref={textareaRef}
                onChange={handleTextChange}
                placeholder="Write your text here..."
                rows="6"
                className="mt-2 py-3 px-4 block w-full rounded-md sm:text-sm focus:outline-none dark:bg-fourth shadow dark:text-primary"
            />
            <div className="flex items-center mt-4 space-x-4">
                <label className="block font-medium text-primary dark:text-fourth">Align:</label>
                <select
                    value={align}
                    onChange={handleAlignChange}
                    className="block py-2 px-4 rounded-md dark:bg-fourth dark:text-primary">
                    <option value="left">Left</option>
                    <option value="center">Center</option>
                    <option value="right">Right</option>
                </select>
            </div>
        </div>
    );
}

export default TextCustomization;
