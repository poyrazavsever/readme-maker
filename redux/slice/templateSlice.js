import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  templates: [], // Template'leri burada saklayacağız
  selectedTemplate: null,
};

const templateSlice = createSlice({
  name: 'template',
  initialState,
  reducers: {
    setTemplates: (state, action) => {
      state.templates = action.payload;
    },
    selectTemplate: (state, action) => {
      state.selectedTemplate = action.payload;
    },
  },
});

export const { setTemplates, selectTemplate } = templateSlice.actions;
export default templateSlice.reducer;
