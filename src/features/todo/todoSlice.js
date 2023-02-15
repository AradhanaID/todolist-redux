import { createSlice } from "@reduxjs/toolkit";
import { uid } from "uid";
export const todoSlice = createSlice({
	name: "todo",
	initialState: [
		{
			id: uid(),
			time: "10:20:35",
			text: "Take the cat to the vet",
			type: "Urgent",
		},
		{
			id: uid(),
			time: "10:20:31",
			text: "Take a bath",
			type: "Important",
		},
		{
			id: uid(),
			time: "10:20:30",
			text: "Do the dishes",
			type: "Regular",
		},
	],
	reducers: {
		addTodo: (state, action) => {
			if(!state.length){
				return [
					action.payload
				]
			}
			
			if(action.payload.type === 'Regular'){
				return [
					...state,
					action.payload
				]
			}else if(action.payload.type === 'Urgent'){
				let placeIndex = 0;
				for(let i = 0; i<state.length; i++){
					if(state[i+1].type !== 'Urgent'){
						return [
							...state.slice(0,placeIndex+1),
							action.payload,
							...state.slice(placeIndex+1)
						]
					}
					placeIndex++;
				}
			}else if(action.payload.type === 'Important'){
				let placeIndex = 0;
				for(let i = 0; i<state.length; i++){
					if(state[i].type !== 'Urgent'){
						return [
							...state.slice(0,placeIndex+1),
							action.payload,
							...state.slice(placeIndex+1)
						]
					}
					placeIndex++;
				}
			}
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
