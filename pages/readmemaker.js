import React, {useState} from 'react'

// Components
import TopSection from '@/components/ReadmeMaker/TopSection'


function ReadmeMaker() {

    const [section, setSection] = useState("project")

    return (
        <div className='md:container md:mx-auto'>
            <TopSection section={section} setSection={setSection}/>
        </div>
    )
}

export default ReadmeMaker