import { createSlice } from '@reduxjs/toolkit';


const numeros = createSlice({

  name: 'numeros',

  initialState: {
    min: 1,
    max: 10,
  },
  reducers: {
    minAletrado(state, alter) {
      state.min = +alter.payload;
    },

    maxAletrado(state, alter) {
      state.max = +alter.payload;
    },
  },

});

export const { minAletrado, maxAletrado } = numeros.actions;
export default numeros.reducer;
