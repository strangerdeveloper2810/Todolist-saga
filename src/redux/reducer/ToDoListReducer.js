import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  taskList: [],
};

const ToDoListReducer = createSlice({
  name: "ToDoListReducer",
  initialState,
  reducers: {
    getAllTaskListAction: (state, action) => {
      state.taskList = action.taskList;
    },
  },
});

export const { getAllTaskListAction } = ToDoListReducer.actions;

export default ToDoListReducer.reducer;
