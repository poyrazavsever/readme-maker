import {useState} from 'react'

// Components
import GithubAdded from '../../Text/GithubAdded';
import NameAdded from '../../Text/NameAdded';
import SelectedTechs from '../../SelectedTechs';
import SelectedSocialMedia from '../../SelectedSocialMedia';
import SelectedCountry from '@/components/SelectedCountry';
import SelectedJob from '@/components/SelectedJob';
import CodeTwo from './CodeTwo';


const Template2 = () => {

    const [currentStep, setCurrentStep] = useState(1);

    return (
        <div className='h-full flex items-center justify-center'>

            {currentStep == 1 &&
                <GithubAdded setCurrentStep={setCurrentStep} currentStep={currentStep}/>
            }
            {currentStep == 2 &&
                <NameAdded setCurrentStep={setCurrentStep} currentStep={currentStep}/>
            }
            {currentStep == 3 &&
                <SelectedTechs setCurrentStep={setCurrentStep} currentStep={currentStep}/>
            }
            {currentStep == 4 &&
                <SelectedSocialMedia setCurrentStep={setCurrentStep} currentStep={currentStep}/>
            }
            {currentStep == 5 &&
                <SelectedCountry setCurrentStep={setCurrentStep} currentStep={currentStep}/>
            }
            {currentStep == 6 &&
                <SelectedJob setCurrentStep={setCurrentStep} currentStep={currentStep}/>
            }

            {currentStep == 7 &&
                <CodeTwo setCurrentStep={setCurrentStep} currentStep={currentStep}/>
            }

        </div>
    )
}

export default Template2