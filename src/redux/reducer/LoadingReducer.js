import { createSlice } from '@reduxjs/toolkit'
import {DISPLAY_LOADING} from "../constants/LoadingConstants"
const initialState = {
    isLoading: false
}

const LoadingReducer = createSlice({
  name: "LoadingReducer",
  initialState,
  reducers: {
    loadingAction: (state, action)=> {
        const {type} = action;
        if (type !== DISPLAY_LOADING) {
            state.isLoading = true;
        }
    }
  }
});

export const {loadingAction} = LoadingReducer.actions

export default LoadingReducer.reducer

// type: LoadingReducer/loadingAction