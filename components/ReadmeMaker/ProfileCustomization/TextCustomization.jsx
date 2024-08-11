import React, { useState } from 'react';

function TextCustomization({ onTextChange }) {
    const [text, setText] = useState('');

    const handleChange = (e) => {
        const newText = e.target.value;
        setText(newText);
        onTextChange(newText);  // Direkt metni gönderiyoruz
    };

    return (
        <div className="w-full">
            <label htmlFor="customText" className="block text-sm font-medium text-gray-700">
                Enter Text
            </label>
            <textarea
                id="customText"
                value={text}
                onChange={handleChange}
                placeholder="Write your text here..."
                rows="6"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
        </div>
    );
}

export default TextCustomization;
