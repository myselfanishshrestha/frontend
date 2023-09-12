import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authSvc from "../pages/home/auth/auth.service";
export const getloggedInUser = createAsyncThunk(
    "user/getLoggedInUser",
     async(data = {}, thunkAPI)=>{
        let token = localStorage.getItem("token") ?? null;
        if (token){
            //api from here
            let userDetail = await authSvc.getLoggedInUser();
            return userDetail.data.data;
        } else {
            throw "Token not set"
        }
     } )

     export const logoutUser = createAsyncThunk(
        "user/logoutUser",
         async(data = null, thunkAPI)=>{
           
                let response = await authSvc.logoutUser();
                return response.data.data;
               
            
         } )
const UserSlicer = createSlice({
    name: "user",
    initialState: {
        loggedInUser: null

    },
    reducers: {
        setLoggedInUser: (state, action)=>{
            console.log(action)
            state.loggedInUser = action.payload

        },
        resetLoginInfo : (state, action)=>{
            state.loggedInUser = null;
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(getloggedInUser.fulfilled, (state, action)=>{
            state.loggedInUser = action.payload
        })
        builder.addCase(getloggedInUser.rejected, (state, action )=>{
            state.loggedInUser = null;
        })
        builder.addCase(logoutUser.fulfilled, (state, action)=>{
            state.loggedInUser = null
            localStorage.clear()
        })

    }
})
export const {setLoggedInUser, resetLoginInfo} = UserSlicer.actions;
export default UserSlicer.reducer;