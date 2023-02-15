import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uid } from "uid";
import { addTodo } from "../../features/todo/todoSlice";

const TodoForm = () => {
	const [todo, setTodo] = useState("");
	const dispatch = useDispatch();

	const onSubmit = () => {
		if(!todo){
			return;
		}
		// add from todo
		const currentTime = new Date();
		dispatch(
			addTodo({
				id: uid(),
				time: currentTime.getHours() + ":" + currentTime.getMinutes() + ":" + currentTime.getSeconds(),
				text: todo,
			})
		);
		setTodo("");
	};
	return (
		<div className='flex gap-4 mt-8'>
			<input
				className='rounded py-2 px-2 bg-zinc-700 focus:outline-none'
				type='text'
				name='search'
				id='search'
				onInput={(e) => setTodo(e.target.value)}
				value={todo}
				autoComplete='off'
			/>

			<button
				className='outline outline-1 outline-zinc-600 px-4 py-2 rounded hover:bg-zinc-700'
				onClick={onSubmit}>
				<p>Add</p>
			</button>
		</div>
	);
};

export default TodoForm;
