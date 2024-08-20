import {useState} from 'react'

// Components
import GithubAdded from '../../Text/GithubAdded';
import NameAdded from '../../Text/NameAdded';
import SelectedTechs from '../../SelectedTechs';
import SelectedSocialMedia from '../../SelectedSocialMedia';
import CodeOne from './CodeOne';
const Template1 = () => {

    const [currentStep, setCurrentStep] = useState(1);

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
                <CodeOne />
            }

        </div>
    )
}

export default Template1