import { useState } from "react";
import { useDispatch } from "react-redux";
import { setName } from "@/redux/slice/informationSlice";

// Icon
import { IoAddCircleOutline } from "react-icons/io5";
import toast from "react-hot-toast";

function NameAdded({setCurrentStep, currentStep}) {

    const dispatch = useDispatch()

    const [nameChange, setNameChange] = useState("")

    const onSave = [nameChange].every(Boolean)

    const handleClick = () => {
        if(onSave) {
            dispatch(setName(nameChange))
            setCurrentStep(currentStep++)
            toast.success("Successfully added")
        }
    }

    return (

        <div className="w-64 flex flex-col items-start gap-4 animate-card">

            <div className="flex flex-col items-start gap-3 w-full">
                <label htmlFor="yourName" className="text-sm uppercase font-semibold tracking-wider text-slate-200">Your Name</label>
                <input
                    type="text"
                    id="yourName"
                    value={nameChange}
                    placeholder="David Jhonsan"
                    onChange={(e) => setNameChange(e.target.value)}
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

export default NameAdded