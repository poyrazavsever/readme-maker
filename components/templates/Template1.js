import {useState} from 'react'
import { useSelector } from 'react-redux';

// Components
import GithubAdded from '../Text/GithubAdded';
import NameAdded from '../Text/NameAdded';
import SelectedTechs from '../SelectedTechs';
import SelectedSocialMedia from '../SelectedSocialMedia';

const Template1 = () => {

    const [currentStep, setCurrentStep] = useState(1);

    const githubUsername = useSelector((state) => state.information.githubUsername)
    const name = useSelector((state) => state.information.name)
    const selectedTechs = useSelector((state) => state.information.techs)
    const selectedSocialMedia = useSelector((state) => state.information.socialMedia)

    return (
        <div>

            {currentStep == 1 &&
                <GithubAdded setCurrentStep={setCurrentStep}/>
            }
            {currentStep == 2 &&
                <NameAdded setCurrentStep={setCurrentStep}/>
            }
            {currentStep == 3 &&
                <SelectedTechs setCurrentStep={setCurrentStep}/>
            }
            {currentStep == 4 &&
                <SelectedSocialMedia setCurrentStep={setCurrentStep}/>
            }

            {currentStep == 5 &&
                <div className='text-white'>
                    {githubUsername}
                    {name}
                    {selectedTechs.map((tech) => {
                        {tech}
                    })}
                    {selectedSocialMedia.map((socialmedia) => {
                        {socialmedia}
                    })}
                </div>
            }

        </div>
    )
}

export default Template1