import { createSlice } from "@reduxjs/toolkit";


const genBook = createSlice({
    name: 'genbook',
    initialState: {
        pageno: 1,
        incordec: true
    },
    reducers: {
        setIncorDec: (state, action) => {
            if (action.payload == "inc") {
                state.incordec = true;
                state.pageno++;
            }
            else if (action.payload == "dec") {
                state.incordec = false;
                state.pageno--;
            }
        }
    }
})


export const { setIncorDec } = genBook.actions;
export default genBook.reducer;
