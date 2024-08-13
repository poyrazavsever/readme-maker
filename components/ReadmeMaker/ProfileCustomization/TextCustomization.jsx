import React, { useState, useEffect } from 'react';

function TextCustomization({ setText }) {
    const [text, setTextState] = useState('');
    const [align, setAlign] = useState('left');
    const [tag, setTag] = useState('p');

    useEffect(() => {
        const markdownText = `<${tag} align="${align}">${text}</${tag}>`;
        setText(markdownText);
    }, [text, align, tag, setText]);

    const handleTextChange = (e) => {
        setTextState(e.target.value);
    };

    const handleAlignChange = (e) => {
        setAlign(e.target.value);
    };

    const handleTagChange = (e) => {
        setTag(e.target.value);
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
            <div className="flex items-center mt-4 space-x-4">
                <label className="block font-medium text-primary dark:text-fourth">Tag:</label>
                <select
                    value={tag}
                    onChange={handleTagChange}
                    className="block py-2 px-4 rounded-md dark:bg-fourth dark:text-primary">
                    <option value="p">Paragraph</option>
                    <option value="h1">Heading 1</option>
                    <option value="h2">Heading 2</option>
                    <option value="h3">Heading 3</option>
                    <option value="h4">Heading 4</option>
                    <option value="h5">Heading 5</option>
                    <option value="h6">Heading 6</option>
                </select>
            </div>
        </div>
    );
}

export default TextCustomization;
