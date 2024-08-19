import { use, useState } from "react";
import { useDispatch } from "react-redux";
import { setText } from "@/redux/slice/informationSlice";

// Icon
import { IoAddCircleOutline } from "react-icons/io5";

function TextAdded() {

    const dispatch = useDispatch()

    const [textChange, setTextChange] = useState("")

    const onSave = [textChange].every(Boolean)

    const handleClick = () => {
        if(onSave) {
            dispatch(setText(textChange))
        }
    }

    return (

        <div className="w-64 flex flex-col items-start gap-4">

            <div className="flex flex-col items-start gap-3 w-full">
                <label htmlFor="yourText" className="text-sm uppercase font-semibold tracking-wider text-slate-200">Your Text</label>
                <textarea
                    type="text"
                    id="yourText"
                    value={textChange}
                    placeholder="Hi! I'm a software developer..."
                    onChange={(e) => setTextChange(e.target.value)}
                    className="focus:outline-none py-2 px-4 rounded bg-slate-700 text-slate-100 w-full h-32 placeholder:text-slate-500"
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

export default TextAdded