import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    paragraph: "",
    name: "",
    githubUsername: "",
    techs: [],
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
        }
    }
});

export const { setName, setText, setGithubUsername, addedTech, deletedTech } = informationSlice.actions;
export default informationSlice.reducer;
