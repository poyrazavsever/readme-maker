import React, { act, useState } from 'react';

// Components
import ImageCustomization from './ImageCustomization';
import TextCustomization from './TextCustomization';
import Templates from './Templates';
import Techs from './Techs';
import Views from './Views';
import SocialMediaCustomization from './SocialMediaCustomization';
import ActivitiesCustomization from './ActivitiesCustomization';
import Stats from './Stats';

function ProfileCustomization({ selectedElement }) {
    const [text, setText] = useState()
    const [imageList, setImageList] = useState([])
    const [template, setTemplate] = useState()
    const [viewMarkdown ,setViewMarkdown] = useState("")
    const [selectedIcons, setSelectedIcons] = useState([]);
    const [markdownList, setMarkdownList] = useState([]);
    const [activitiesList ,setActivitiesList ] = useState();
    const [statsList, setStatsList] = useState([])
    const [savedTechs, setSavedTechs] = useState([]);

    console.log(text)

    // Diğer özelleştirme fonksiyonları da buraya eklenecek

    const renderCustomizationComponent = () => {
        switch (selectedElement) {
            case 'Text':
                return <TextCustomization setText={setText} />;
            case 'Image':
                return <ImageCustomization setImageList={setImageList} imageList={imageList}/>;
            case 'Templates':
                return <Templates setTemplate={setTemplate} />;
            case 'Techs':
                return <Techs setSavedTechs={setSavedTechs} savedTechs={savedTechs}/>;
            case 'Views':
                return <Views setViewMarkdown={setViewMarkdown}/>;
            case 'Social Media':
                return <SocialMediaCustomization selectedIcons={selectedIcons} setSelectedIcons={setSelectedIcons} markdownList={markdownList} setMarkdownList={setMarkdownList}/>;
            case 'My Activities':
                return <ActivitiesCustomization setActivitiesList={setActivitiesList}/>;
            case 'Stats':
                return <Stats setStatsList={setStatsList}/>;

            default:
                return <div>Select an element to customize</div>;
        }
    };

    return (
        <div>
            {renderCustomizationComponent()}
        </div>
    );
}

export default ProfileCustomization;
