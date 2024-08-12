import React, { use, useState } from 'react';

// Components
import ImageCustomization from './ImageCustomization';
import TextCustomization from './TextCustomization';
import Templates from './Templates';
import Techs from './Techs';
import Views from './Views';
import SocialMediaCustomization from './SocialMediaCustomization';
import MusicCustomization from './MusicCustomization';
import ActivitiesCustomization from './ActivitiesCustomization';
import Stats from './Stats';

function ProfileCustomization({ selectedElement }) {
    const [customizationData, setCustomizationData] = useState({});
    const [text, setText] = useState()
    const [ımageLink, setImageLink] = useState()

    // Diğer özelleştirme fonksiyonları da buraya eklenecek

    const renderCustomizationComponent = () => {
        switch (selectedElement) {
            case 'Text':
                return <TextCustomization setText={setText} />;
            case 'Image':
                return <ImageCustomization setImageLink={setImageLink} />;
            case 'Templates':
                return <Templates />;
            case 'Techs':
                return <Techs />;
            case 'Views':
                return <Views />;
            case 'Social Media':
                return <SocialMediaCustomization />;
            case 'Music':
                return <MusicCustomization />;
            case 'My Activities':
                return <ActivitiesCustomization />;
            case 'Stats':
                return <Stats />;

            default:
                return <div>Select an element to customize</div>;
        }
    };

    return (
        <div className="profile-customization">
            {renderCustomizationComponent()}
        </div>
    );
}

export default ProfileCustomization;
