import { configureStore } from "@reduxjs/toolkit";
import genbookslice from "./genbookslice";

const store = configureStore({
    reducer: genbookslice
})

export default store;