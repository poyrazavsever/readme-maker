import { useDispatch } from "react-redux"
import { selectTemplate } from "@/redux/slice/templateSlice"

function BackButton({ setCurrentStep, currentStep }) {
    
    const dispatch = useDispatch()

    const previousStep = currentStep !== 1 ? currentStep - 1 : currentStep

    const handlePreviousStep = () => {
        if(previousStep == currentStep){
            dispatch(selectTemplate(false))
        }
        setCurrentStep(previousStep)
    }

    return (
        <button onClick={handlePreviousStep} className="inline-flex items-center px-6 py-3 bg-slate-700 text-white font-semibold rounded-lg shadow-md group absolute top-12 right-12">
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-slate-700 to-slate-800 transition-transform transform group-hover:translate-x-1 group-hover:translate-y-1 rounded-lg"></span>
            <span className="absolute inset-0 w-full h-full border-2 border-slate-500 rounded-lg"></span>
            <span className="relative flex items-center">
                <svg className="w-5 h-5 mr-3 transition-transform transform group-hover:-translate-x-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
                Back
            </span>
        </button>

    )
}

export default BackButton