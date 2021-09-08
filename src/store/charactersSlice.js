import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  loading: true,
};
const url = "http://star-wars-characters.glitch.me/api/search/";
export const fetchCharactersFromAPI = createAsyncThunk('characters/fetchCharacters', async (searchTerm) => {
  const response = await fetch(url + searchTerm).then((response) =>
    response.json()

  );
  console.log('res', response.results);
  return response.results;
})
export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    add: (state, action) => {
      state.characters = action.payload;
    },
  },
  extraReducers: {
    [fetchCharactersFromAPI.fulfilled]: (state, action) => {

      state.data = action.payload;
      state.loading = false;
      console.log(state.data)
    }
  }
});
