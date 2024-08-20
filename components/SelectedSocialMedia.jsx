import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    addSocialMedia,
    removeSocialMedia,
    updateSocialMediaLink
} from '../redux/slice/informationSlice'; // Redux slice'ınıza uygun yolu kullanın

const socialMediaList = [
    'behance', 'codepen', 'discord', 'facebook', 'gmail',
    'instagram', 'linkedin', 'medium', 'stackoverflow',
    'telegram', 'twitch', 'twitter', 'whatsapp', 'youtube'
];

const SelectedSocialMedia = ({setCurrentStep}) => {
    const dispatch = useDispatch();
    const socialMedia = useSelector((state) => state.information.socialMedia);

    const handleIconClick = (icon) => {
        dispatch(addSocialMedia({ platform: icon, link: '' }));
    };

    const handleLinkChange = (icon, link) => {
        dispatch(updateSocialMediaLink({ platform: icon, link }));
    };

    const handleRemoveIcon = (icon) => {
        dispatch(removeSocialMedia(icon));
    };

    console.log(socialMedia)

    return (
        <div className="flex flex-col md:flex-row">

            {/* Sağ Taraf: Sosyal Medya İkonları */}
            <div className="md:w-1/2 p-4 border-b md:border-r md:border-b-0">

                <h2 className="text-xl font-semibold tracking-wider text-slate-200 mb-4">Social Media</h2>

                <div className="flex flex-wrap gap-6 md:gap-12">
                    {socialMediaList.map(icon => (
                        <button
                            key={icon}
                            className="cursor-pointer bg-slate-800 rounded p-2 w-16 h-16 flex items-center justify-center hover:bg-slate-600 hover:-translate-y-1 transition-all"
                            onClick={() => handleIconClick(icon)}
                        >
                            <img
                                src={`/SocialMedia/${icon}/default.svg`}
                                alt={icon}
                                className="w-12 h-12"
                            />
                        </button>
                    ))}
                </div>

            </div>

            {/* Sol Taraf: Seçilen Sosyal Medya İkonları ve Linkler */}
            <div className="md:px-16 py-4">

                <h2 className="text-xl font-semibold tracking-wider text-slate-200 mb-4">Selected Social Media</h2>

                <div className='flex flex-col items-start gap-4'>
                    {socialMedia.map(icon => (
                        <div key={icon.platform} className="flex flex-col md:flex-row items-center gap-4 mb-4">

                            <img
                                src={`/SocialMedia/${icon.platform}/default.svg`}
                                alt={icon.platform}
                                className="w-12 h-12"
                            />

                            <div className="flex flex-col w-full md:w-auto">
                                <input
                                    type="text"
                                    placeholder={`Link for ${icon.platform}`}
                                    value={icon.link || ''}
                                    onChange={(e) => handleLinkChange(icon.platform, e.target.value)}
                                    className="p-2 focus:outline-none py-2 px-4 rounded bg-slate-700 text-slate-100 placeholder:text-slate-500"
                                />
                            </div>

                            <button
                                onClick={() => handleRemoveIcon(icon.platform)}
                                className="text-red-100 bg-red-900 hover:bg-red-700 transition py-2 px-4 rounded"
                            >
                                Remove
                            </button>

                        </div>
                    ))}

                    <button
                        onClick={() => setCurrentStep(5)}
                        className="text-slate-100 bg-slate-600 hover:bg-slate-700 transition py-2 px-4 rounded"
                    >
                        Done
                    </button>
                </div>

            </div>
        </div>
    );
};

export default SelectedSocialMedia;
