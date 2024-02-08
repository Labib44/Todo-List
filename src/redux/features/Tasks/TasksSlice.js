import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: [{
        id: 1,
        status: 'pending',
        title: 'Web Development',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        date: '2023-05-28',
        assignedTo: 'Mir Hussain',
        priority: 'high',
    }],
    demoPayload: " "
}
const TasksSlice = createSlice({
    name: 'tasksSlice',
    initialState,
    reducers: {
        addTask: (state, { payload }) => {
            if (state.tasks.length === 0) {
                state.tasks.push({ id: 1, status: "pending", ...payload });
            }
            else {
                const lastElement = state.tasks.at(-1);
                state.tasks.push({ id: lastElement.id + 1, status: "pending", ...payload })
            }
        },
        removeTasks: (state, { payload }) => {
            state.tasks = state.tasks.filter((item) => item.id !== payload);

        },
        updateStatus: (state, { payload }) => {
            const target = state.tasks.find((item) => item.id === payload.id);
            target.status = payload.status;

        },
    },
});

export const { addTask, removeTasks, updateStatus } = TasksSlice.actions;
export default TasksSlice.reducer;