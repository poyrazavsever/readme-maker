import { useState } from "react";
import { useDispatch } from "react-redux";
import { country } from "@/public/assets/country";
import { setCountry } from "@/redux/slice/informationSlice"; // setCountryName yerine setCountry

// Icon
import { IoAddCircleOutline } from "react-icons/io5";
import toast from "react-hot-toast";
import BackButton from "./BackButton";


function SelectedCountry({ setCurrentStep, currentStep }) {

    const dispatch = useDispatch()

    const nextStep = currentStep + 1

    const [countryName, setCountryName] = useState("")

    const onSave = [countryName].every(Boolean)

    const handleClick = () => {
        if (onSave) {
            dispatch(setCountry(countryName)) // setCountryName yerine setCountry kullandık
            toast.success("Successfully added")
            setCurrentStep(nextStep)
        }
    }

    const handleOnChange = (e) => setCountryName(e.target.value)

    return (

        <div className="w-64 flex flex-col items-start gap-4 animate-card">

            <BackButton setCurrentStep={setCurrentStep} currentStep={currentStep} />

            <div className="flex flex-col items-start gap-3 w-full">
                <label htmlFor="countryName" className="text-sm uppercase font-semibold tracking-wider text-slate-200">Your Country</label>
                <select
                    type="text"
                    id="countryName"
                    placeholder="Turkey"
                    onChange={handleOnChange}
                    className="focus:outline-none py-2 px-4 rounded bg-slate-700 text-slate-100 w-full placeholder:text-slate-500"
                >
                    <option value=""></option>
                    {country.map((country) => (
                        <option key={country.url} value={country.name}>
                            {country.name}
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

export default SelectedCountry;