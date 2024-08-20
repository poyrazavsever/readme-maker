import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCountry } from "@/redux/slice/informationSlice";
import { IoAddCircleOutline } from "react-icons/io5";
import toast from "react-hot-toast";
import BackButton from "./BackButton";

function SelectedCountry({ setCurrentStep, currentStep }) {
    const dispatch = useDispatch();
    const nextStep = currentStep + 1;
    const [countryName, setCountryName] = useState("");
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true); // Initial loading state
    const [error, setError] = useState(null); // For handling errors

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await fetch("/assets/country.json");
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setCountries(data);
                setLoading(false); // Set loading to false after data is loaded
            } catch (err) {
                setError(err.message);
                setLoading(false); // Set loading to false even if there is an error
            }
        };

        fetchCountries();
    }, []);

    const onSave = Boolean(countryName);

    const handleClick = () => {
        if (onSave) {
            dispatch(setCountry(countryName));
            toast.success("Successfully added");
            setCurrentStep(nextStep);
        }
    };

    const onHandleChange = (e) => {
        setCountryName(e.target.value);
    };

    if (loading) {
        return (
            <div className="fixed inset-0 flex items-center justify-center bg-slate-800 bg-opacity-50">
                <div className="relative flex items-center justify-center w-16 h-16">
                    <div className="absolute border-t-4 border-b-4 border-slate-100 border-solid rounded-full w-16 h-16 animate-spin"></div>
                    <div className="absolute border-t-4 border-b-4 border-transparent border-solid rounded-full w-16 h-16 border-t-transparent border-b-transparent"></div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center text-red-500">
                <p>Error loading countries: {error}</p>
            </div>
        );
    }

    return (
        <div className="w-64 flex flex-col items-start gap-4 animate-card">
            <BackButton setCurrentStep={setCurrentStep} currentStep={currentStep} />

            <div className="flex flex-col items-start gap-3 w-full">
                <label htmlFor="countryName" className="text-sm uppercase font-semibold tracking-wider text-slate-200">
                    Your Country
                </label>
                <select
                    id="countryName"
                    value={countryName}
                    onChange={onHandleChange}
                    className="focus:outline-none py-2 px-4 rounded bg-slate-700 text-slate-100 w-full placeholder:text-slate-500"
                >
                    <option value="" disabled>Select a country</option>
                    {countries.map((c) => (
                        <option key={c.alpha3} value={c.name}>
                            {c.name}
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
    );
}

export default SelectedCountry;
