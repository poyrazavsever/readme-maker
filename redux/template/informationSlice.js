import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    paragraph: "",
    name: "",
    githubUsername: "",
}

const informationSlice = createSlice({
    name: "information",
    initialState,
    reducers: {
        setText: (state, action) => {
            state.paragraph = action.payload
        },
        setName: (state, action) => {
            state.name = action.payload
        },
        setGithubUsername: (state, action) => {
            state.githubUsername = action.payload
        }
    }
})

export const {setName, setText, setGithubUsername} = informationSlice.actions
export default informationSlice.reducer