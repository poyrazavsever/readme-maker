import React, { useEffect } from 'react';
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

const SelectedSocialMedia = () => {
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

    return (
        <div className="flex">

            {/* Sağ Taraf: Sosyal Medya İkonları */}
            <div className="w-1/2 p-4 border-r">

                <h2 className="text-xl font-semibold tracking-wider text-slate-200 mb-4">Social Media</h2>

                <div className="flex flex-wrap gap-12">
                    {socialMediaList.map(icon => (
                        <button
                            key={icon}
                            className="cursor-pointer bg-slate-800 rounded p-2 w-fit hover:bg-slate-600 hover:-translate-y-1 transition-all"
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
            <div className="px-16 py-4">

                <h2 className="text-xl font-semibold tracking-wider text-slate-200 mb-4">Selected Social Media</h2>

                <div className='flex flex-col items-start gap-4 pt-6'>
                    {socialMedia.map(icon => (
                        <div key={icon.platform} className="flex items-center gap-4 mb-4">

                            <img
                                src={`/SocialMedia/${icon.platform}/default.svg`}
                                alt={icon.platform}
                                className="w-12 h-12"
                            />

                            <input
                                type="text"
                                placeholder={`Link for ${icon.platform}`}
                                value={icon.link || ''}
                                onChange={(e) => handleLinkChange(icon.platform, e.target.value)}
                                className="p-2 focus:outline-none py-2 px-4 rounded bg-slate-700 text-slate-100 placeholder:text-slate-500"
                            />

                            <button
                                onClick={() => handleRemoveIcon(icon.platform)}
                                className="text-red-100 bg-red-900 hover:bg-red-700 transition py-2 px-4 rounded"
                            >
                                Remove
                            </button>

                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default SelectedSocialMedia;
