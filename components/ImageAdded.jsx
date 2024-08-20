import { useState } from "react";
import { useDispatch } from "react-redux";
import { setImage } from "@/redux/slice/informationSlice";

// Icon
import { IoAddCircleOutline } from "react-icons/io5";

function ImageAdded({setCurrentStep, currentStep}) {

    const dispatch = useDispatch()

    const nextStep = currentStep + 1

    const [imageChange, setImageChange] = useState("")

    const onSave = [imageChange].every(Boolean)

    const handleClick = () => {
        if(onSave) {
            dispatch(setImage(imageChange))
            setCurrentStep(nextStep)
        }
    }

    return (

        <div className="w-64 h-full flex flex-col items-start gap-4 animate-card">

            <div className="flex flex-col items-start gap-3 w-full">
                <label htmlFor="yourImage" className="text-sm uppercase font-semibold tracking-wider text-slate-200">Your Image Link</label>
                <input
                    type="text"
                    id="yourImage"
                    value={imageChange}
                    placeholder="https://www.image.link"
                    onChange={(e) => setImageChange(e.target.value)}
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

export default ImageAdded