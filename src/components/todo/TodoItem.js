import React from "react";
import { BsX } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../../features/todo/todoSlice";
const TodoItem = ({ todo }) => {
	const { text, time } = todo;
	const dispatch = useDispatch();
	const removeItem = () => {
		dispatch(removeTodo(todo));
	}
	return (
		<div className='my-4 flex items-center justify-between'>
			<div>
				<p className='text-zinc-500 text-sm'>{time}</p>
				<p>{text}</p>
			</div>
			<BsX size={25} onClick={removeItem}/>
		</div>
	);
};

export default TodoItem;
