import React, { useState } from 'react';

const ImageCustomization = ({ setImageList, imageList}) => {
    const [imageUrl, setImageUrl] = useState('');
    const [align, setAlign] = useState('left');
    const [height, setHeight] = useState('');
    const [float, setFloat] = useState('none');

    const handleAddImage = () => {
        if (imageUrl) {
            const markdownImage = `<img src="${imageUrl}" alt="custom image" height="${height}" align="${align}" float="${float}" />`;

            setImageList([...imageList, markdownImage]);

            // Clear inputs after adding
            setImageUrl('');
            setAlign('left');
            setHeight('');
            setFloat('none');
        }
    };

    console.log(imageList)

    return (
        <div className='animation-card'>
            <h2 className='pt-6 uppercase tracking-wider font-semibold text-primary dark:text-fourth'>Image Customization</h2>
            <div className="mt-4">
                <label htmlFor="image-url" className='text-xs uppercase tracking-wide font-medium text-primary dark:text-fourth'>Image URL</label>
                <input
                    id="image-url"
                    type="url"
                    placeholder="Enter image URL"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    className="px-3 py-2 w-full rounded bg-tert bg-opacity-50 text-primary focus:outline-none my-2 dark:bg-zinc-200 dark:shadow-md dark:text-fourth dark:opacity-100 dark:placeholder:text-fourth"
                />
            </div>
            <div className="mt-4">
                <label htmlFor="align" className='text-xs uppercase tracking-wide font-medium text-primary dark:text-fourth'>Align</label>
                <select
                    id="align"
                    value={align}
                    onChange={(e) => setAlign(e.target.value)}
                    className="px-3 py-2 w-full rounded bg-tert bg-opacity-50 text-primary focus:outline-none dark:bg-zinc-200 dark:shadow-md dark:text-fourth dark:opacity-100"
                >
                    <option value="left">Left</option>
                    <option value="center">Center</option>
                    <option value="right">Right</option>
                </select>
            </div>
            <div className="mt-4">
                <label htmlFor="height" className='text-xs uppercase tracking-wide font-medium text-primary dark:text-fourth'>Height</label>
                <input
                    id="height"
                    type="number"
                    placeholder="Enter height in pixels"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="px-3 py-2 w-full rounded bg-tert bg-opacity-50 text-primary focus:outline-none my-2 dark:bg-zinc-200 dark:shadow-md dark:text-fourth dark:opacity-100 dark:placeholder:text-fourth"
                />
            </div>
            <div className="mt-4">
                <label htmlFor="float" className='text-xs uppercase tracking-wide font-medium text-primary dark:text-fourth'>Float</label>
                <select
                    id="float"
                    value={float}
                    onChange={(e) => setFloat(e.target.value)}
                    className="px-3 py-2 w-full rounded bg-tert bg-opacity-50 text-primary focus:outline-none dark:bg-zinc-200 dark:shadow-md dark:text-fourth dark:opacity-100"
                >
                    <option value="none">None</option>
                    <option value="left">Left</option>
                    <option value="right">Right</option>
                </select>
            </div>
            <button
                onClick={handleAddImage}
                className="mt-6 px-4 py-2 bg-tert text-white rounded hover:bg-secondary transition-all dark:bg-fourth"
            >
                Add Image
            </button>
        </div>
    );
};

export default ImageCustomization;
