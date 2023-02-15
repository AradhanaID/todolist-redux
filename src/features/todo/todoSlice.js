import { createSlice } from "@reduxjs/toolkit";
import { uid } from "uid";
export const todoSlice = createSlice({
	name: "todo",
	initialState: [
		{
			id: uid(),
			time: "12:56:21",
			text: "Todo1",
		},
		{
			id: uid(),
			time: "12:58:37",
			text: "Todo2",
		},
	],
	reducers: {
		addTodo: (state, action) => {
			state.push(action.payload);
		},
		removeTodo: (state, action) => {
			return state.filter((todo) => {
				return todo.id !== action.payload.id;
			});
		},
	},
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
