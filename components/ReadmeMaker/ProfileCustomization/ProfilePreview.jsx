import React from 'react'
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

function ProfilePreview({ createdTemplate }) {
  return (
    <div>
      <ReactMarkdown
        children={createdTemplate}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        skipHtml={false}
        className='prose prose-invert text-fourth dark:text-primary'
      />

    </div>
  )
}

export default ProfilePreview