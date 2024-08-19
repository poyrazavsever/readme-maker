import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    paragraph: "",
    name: "",
    githubUsername: "",
}

const textSlice = createSlice({
    name: "texts",
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

export const {setName, setText, setGithubUsername} = textSlice.actions
export default textSlice.reducer