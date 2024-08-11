import React, { useState } from 'react';

function ImageCustomization({ onImageLinkChange }) {
    const [imageLink, setImageLink] = useState('');

    const handleImageLinkChange = (e) => {
        setImageLink(e.target.value);
        onImageLinkChange(e.target.value);
    };

    return (
        <div className="flex flex-col">
            <label htmlFor="imageLink" className="text-sm font-medium text-gray-700">
                Enter image URL:
            </label>
            <input
                type="text"
                id="imageLink"
                value={imageLink}
                onChange={handleImageLinkChange}
                className="mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="https://example.com/image.png"
            />
        </div>
    );
}

export default ImageCustomization;
