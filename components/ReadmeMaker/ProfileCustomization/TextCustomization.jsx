import React from 'react';

function TextCustomization({ setText }) {
    const handleChange = (e) => {
        const newText = e.target.value;
        setText(newText);  // Direkt metni gönderiyoruz
    };

    return (
        <div className="flex flex-col pt-6">
            <label htmlFor="customText" className="block font-medium text-primary dark:text-fourth">
                Enter Text
            </label>
            <input
                id="customText"
                onChange={handleChange}
                placeholder="Write your text here..."
                rows="6"
                className="mt-2 py-3 px-4 block w-full rounded-md sm:text-sm focus:outline-none dark:bg-fourth shadow dark:text-primary"
            />
        </div>
    );
}

export default TextCustomization;
