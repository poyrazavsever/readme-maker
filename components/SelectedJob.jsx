import { useState } from "react";
import { useDispatch } from "react-redux";
import { jobs } from "@/public/assets/jobs";
import { setJob } from "@/redux/slice/informationSlice";

// Icon
import { IoAddCircleOutline } from "react-icons/io5";
import toast from "react-hot-toast";
import BackButton from "./BackButton";


function SelectedJob({ setCurrentStep, currentStep }) {

    const dispatch = useDispatch()

    const nextStep = currentStep + 1

    const [jobName, setJobName] = useState("")

    const onSave = [jobName].every(Boolean)

    const handleClick = () => {
        if (onSave) {
            dispatch(setJob(jobName))
            toast.success("Successfully added")
            setCurrentStep(nextStep)
        }
    }

    const handleOnChange = (e) => setJobName(e.target.value)

    return (

        <div className="w-64 flex flex-col items-start gap-4 animate-card">

            <BackButton setCurrentStep={setCurrentStep} currentStep={currentStep} />

            <div className="flex flex-col items-start gap-3 w-full">
                <label htmlFor="jobName" className="text-sm uppercase font-semibold tracking-wider text-slate-200">Your area of ​​expertise:</label>
                <select
                    type="text"
                    id="jobName"
                    placeholder="Front-end Developer"
                    onChange={handleOnChange}
                    className="focus:outline-none py-2 px-4 rounded bg-slate-700 text-slate-100 w-full placeholder:text-slate-500"
                >
                    <option value=""></option>
                    {jobs.map((job) => (
                        <option key={job.name} value={job.name}>
                            {job.name}
                        </option>
                    ))}

                </select>
            </div>

            <button
                className="flex items-center justify-center gap-2 py-2 bg-slate-700 w-full rounded transition-all disabled:hover:bg-red-700 hover:bg-green-800"
                onClick={handleClick}
                disabled={!onSave}
            >
                <IoAddCircleOutline className="text-slate-100 text-lg" />
                <span className="uppercase font-semibold text-slate-200">Add</span>
            </button>

        </div>
    )
}

export default SelectedJob;
