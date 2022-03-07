import {createSlice} from "@reduxjs/toolkit";

const realEstatesSlice = createSlice({
    name: 'realEstates',
    initialState: {
        realEstatesData: [],
        loadingRealEstates: false
    },
    reducers: {
        getRealEstates: (state, action) => {
            state.realEstatesData = action.data;
        },
        setLoadingTrue: (state) => {
            state.loadingRealEstates = true;
        },
        setLoadingFalse: (state) => {
            state.loadingRealEstates = false;
        }
    }
})

const realEstatesReducer = realEstatesSlice.reducer
export default realEstatesReducer
