import { createSlice } from "@reduxjs/toolkit";

const initialState={
    name:'Labib',
    email:'labib@gmail.com',
    userTask:[],
};

const UserSlice=createSlice({
    name:'userSlice',
    initialState,
    reducers:{

    }
});

export default UserSlice.reducer;