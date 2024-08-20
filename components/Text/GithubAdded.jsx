import { useState } from "react";
import { useDispatch } from "react-redux";
import { setGithubUsername } from "@/redux/slice/informationSlice";
import toast from 'react-hot-toast'

// Icon
import { IoAddCircleOutline } from "react-icons/io5";

function GithubAdded({setCurrentStep}) {

    const dispatch = useDispatch()

    const [githubChange, setGithubChange] = useState("")

    const onSave = [githubChange].every(Boolean)

    const handleClick = async () => {
        try {
            let response = await fetch(`https://api.github.com/users/${githubChange}`)
            
            if (!response.ok) {
                toast.error('User not found');
            }

            if (onSave && response.ok) {
                dispatch(setGithubUsername(githubChange))
                toast.success("Successfully added")
                setCurrentStep(2)
            }
        } catch (error) {
            toast.error(`Unfortunately, the ${githubChange} is not correct.`)
        }
    }

    return (

        <div className="w-64 flex flex-col items-start gap-4 animate-card">

            <div className="flex flex-col items-start gap-3 w-full">
                <label htmlFor="yourName" className="text-sm uppercase font-semibold tracking-wider text-slate-200"> Github Username</label>
                <input
                    type="text"
                    id="yourName"
                    value={githubChange}
                    placeholder="David_Jhonsan"
                    onChange={(e) => setGithubChange(e.target.value)}
                    className="focus:outline-none py-2 px-4 rounded bg-slate-700 text-slate-100 w-full placeholder:text-slate-500"
                />
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

export default GithubAdded