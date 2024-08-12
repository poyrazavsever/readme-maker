import React, { useState } from 'react';

function TextCustomization({ setText }) {
    const [align, setAlign] = useState('left');

    const handleTextChange = (e) => {
        const newText = e.target.value;
        const markdownText = `<p align="${align}">${newText}</p>`;
        setText(markdownText);  // Markdown formatında metni kaydediyoruz
    };

    const handleAlignChange = (e) => {
        setAlign(e.target.value);
        const inputText = document.getElementById('customText').value;
        const markdownText = `<p align="${e.target.value}">${inputText}</p>`;
        setText(markdownText);  // Hizalamayı güncelleyip kaydediyoruz
    };

    return (
        <div className="flex flex-col pt-6">
            <label htmlFor="customText" className="block font-medium text-primary dark:text-fourth">
                Enter Text
            </label>
            <textarea
                id="customText"
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
