import React, { useState } from 'react';

// Components
import ImageCustomization from './ImageCustomization';
import TextCustomization from './TextCustomization';

function ProfileCustomization({ selectedElement }) {
    const [customizationData, setCustomizationData] = useState({});

    const handleTextChange = (text) => {
        setCustomizationData((prevData) => ({
            ...prevData,
            text,
        }));
    };

    const handleImageLinkChange = (imageLink) => {
        setCustomizationData((prevData) => ({
            ...prevData,
            imageLink,
        }));
    };

    // Diğer özelleştirme fonksiyonları da buraya eklenecek

    const renderCustomizationComponent = () => {
        switch (selectedElement) {
            case 'Text':
                return <TextCustomization onTextChange={handleTextChange} />;
            case 'Image':
                return <ImageCustomization onImageLinkChange={handleImageLinkChange} />;
            // Diğer case'ler eklenebilir
            default:
                return <div>Select an element to customize</div>;
        }
    };

    return (
        <div className="profile-customization">
            {renderCustomizationComponent()}
            {/* Eklenen verilerin önizlemesi veya başka elementler eklenebilir */}
        </div>
    );
}

export default ProfileCustomization;
