import { configureStore } from "@reduxjs/toolkit";
import TasksSlice from "./features/Tasks/TasksSlice";
import UserSlice from "./features/User/UserSlice";

const store=configureStore({
    reducer:{
        tasksSlice:TasksSlice,
        userSlice:UserSlice,
    },
});

export default store;