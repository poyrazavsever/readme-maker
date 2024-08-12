import React from 'react';

function ImageCustomization({ setImageLink }) {

    const handleImageLinkChange = (e) => {
        setImageLink(e.target.value);
    };

    return (
        <div className="flex flex-col pt-6">
            <label htmlFor="imageLink" className="block font-medium text-primary dark:text-fourth">
                Enter image URL:
            </label>
            <input
                type="text"
                id="imageLink"
                onChange={handleImageLinkChange}
                className="mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="https://example.com/image.png"
            />
        </div>
    );
}

export default ImageCustomization;
