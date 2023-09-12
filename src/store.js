import { configureStore } from "@reduxjs/toolkit";
import userReducers from "./reducers/user.reducers";

const store = configureStore({
    reducer:{
        User: userReducers 

    }
});

export default store;