import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    paragraph: "",
    name: "",
    githubUsername: "",
    techs: [],
    socialMedia: [],
};

const informationSlice = createSlice({
    name: "information",
    initialState,
    reducers: {
        setText: (state, action) => {
            state.paragraph = action.payload;
        },
        setName: (state, action) => {
            state.name = action.payload;
        },
        setGithubUsername: (state, action) => {
            state.githubUsername = action.payload;
        },
        addedTech: (state, action) => {
            const techToAdd = action.payload;
            const techExists = state.techs.some(
                tech => tech.name === techToAdd.name && tech.provider === techToAdd.provider
            );
            if (!techExists) {
                state.techs.push(techToAdd);
            }
        },
        deletedTech: (state, action) => {
            const techToRemove = action.payload;
            state.techs = state.techs.filter(
                tech => tech.name !== techToRemove.name || tech.provider !== techToRemove.provider
            );
        },
        addSocialMedia: (state, action) => {
            const socialMediaToAdd = action.payload;
            const socialMediaExists = state.socialMedia.some(
                social => social.platform === socialMediaToAdd.platform
            );
            if (!socialMediaExists) {
                state.socialMedia.push(socialMediaToAdd);
            }
        },
        removeSocialMedia: (state, action) => {
            const platformToRemove = action.payload;
            state.socialMedia = state.socialMedia.filter(
                social => social.platform !== platformToRemove
            );
        },
        updateSocialMediaLink: (state, action) => {
            const { platform, link } = action.payload;
            const socialMediaIndex = state.socialMedia.findIndex(
                social => social.platform === platform
            );
            if (socialMediaIndex !== -1) {
                state.socialMedia[socialMediaIndex].link = link;
            }
        }
    }
});

export const {
    setName,
    setText,
    setGithubUsername,
    addedTech,
    deletedTech,
    addSocialMedia,
    removeSocialMedia,
    updateSocialMediaLink
} = informationSlice.actions;

export default informationSlice.reducer;
