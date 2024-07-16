import { configureStore } from "@reduxjs/toolkit";
import options from "../options/options";

const store = configureStore({
    reducer: {
        options: options
    }
})


export default store;
