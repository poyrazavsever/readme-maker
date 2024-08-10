import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import classNames from 'classnames';

function MdEditor() {
    const [active, setActive] = useState("code");
    const [code, setCode] = useState("");

    return (
        <div className='flex flex-col md:flex-row h-full'>
            <div className={`w-full md:w-1/2 p-4 ${active === "code" ? "block" : "hidden"} md:block`}>
                <div className='relative h-full'>
                    <textarea
                        className='w-full h-full bg-fourth text-sm text-primary tracking-wider p-4 border-2 border-gray-300 rounded-md focus:outline-none'
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        placeholder="Write your Markdown here..."
                    />
                </div>
            </div>
            <div className={`w-full md:w-1/2 p-4 bg-gray-50 ${active === "output" ? "block" : "hidden"} md:block overflow-y-auto`}>
                <div className='prose prose-lg max-w-none'>
                    <ReactMarkdown children={code} remarkPlugins={[remarkGfm]} />
                </div>
            </div>
            <div className='md:hidden flex justify-center mt-4 space-x-4'>
                <button onClick={() => setActive("code")} className={classNames('uppercase font-semibold tracking-widest', { 'underline': active === "code" })}>Code</button>
                <button onClick={() => setActive("output")} className={classNames('uppercase font-semibold tracking-widest', { 'underline': active === "output" })}>Output</button>
            </div>
        </div>
    );
}

export default MdEditor;
