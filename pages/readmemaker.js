import React, {useState} from 'react'

// Components
import TopSection from '@/components/ReadmeMaker/TopSection'
import ProfileGenerator from '@/components/ReadmeMaker/ProfileGenerator'
import ProjectGenerator from '@/components/ReadmeMaker/ProjectGenerator'

function ReadmeMaker() {

    const [section, setSection] = useState(false)

    return (
        <div className='md:container md:mx-auto'>
            <TopSection section={section} setSection={setSection}/>

            {!section && 
                <ProfileGenerator />
            }
            {section && 
                <ProjectGenerator />
            }
        </div>
    )
}

export default ReadmeMaker