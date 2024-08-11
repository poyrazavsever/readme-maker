import React, { useState } from 'react';
import { elements } from '@/elements';

function ProfileElements({ setSelectedElement }) {

  const [expandedElement, setExpandedElement] = useState(null);

  const handleExpand = (element) => {
    if (expandedElement === element) {
      setExpandedElement(null);
    } else {
      setExpandedElement(element);
    }
  };

  return (
    <div className='flex flex-col gap-4'>
      {elements.map(element => (
        <div key={element.id}>
          <button
            onClick={() => {
              handleExpand(element.name);
              setSelectedElement(element.name);
            }}
            className='text-lg font-semibold tracking-wider text-primary py-2 w-full bg-tert hover:bg-secondary transition-all rounded'
          >
            {element.name}
          </button>

          {element.subElements && expandedElement === element.name && (
            <div className='px-4 mt-2 flex flex-col items-start gap-2 animate-card py-2 w-full bg-tert rounded'>
              {element.subElements.map(subElement => (
                <button
                  key={subElement.id}
                  onClick={() => setSelectedElement(subElement.name)}
                  className='text-sm w-full font-medium tracking-wide text-start text-neutral-400 hover:text-neutral-100 transition-all hover:bg-fourth px-2 p-1 rounded-md'
                >
                  - {subElement.name}
                </button>
              ))}
            </div>
          )}

        </div>
      ))}
    </div>
  );
}

export default ProfileElements;
