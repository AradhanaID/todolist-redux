import React from "react";
import { BsX } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../../features/todo/todoSlice";

const todoTypeText = (type) => {
	let badgeStyle = "";
	switch (type) {
		case "Regular":
			badgeStyle = 'bg-blue-500 text-blue-50 rounded-sm px-2 py-1 text-xs ml-2';
			break;
		case "Important":
			badgeStyle = 'bg-orange-500 text-orange-50 rounded-sm px-2 py-1 text-xs ml-2';
			break;
		case "Urgent":
			badgeStyle = 'bg-red-500 text-red-50 rounded-sm px-2 py-1 text-xs ml-2';
			break;
		default:
			break;
	}
	return <div className={badgeStyle}>{type}</div>;
};

const TodoItem = ({ todo }) => {
	const { text, time, type } = todo;
	const dispatch = useDispatch();
	const removeItem = () => {
		dispatch(removeTodo(todo));
	};

	return (
		<div className='my-4 flex items-center justify-between'>
			<div className="mb-2">
				<div className='flex items-center'>
					<p className='text-zinc-500 text-sm'>
						{time}
					</p>
					{todoTypeText(type)}
				</div>
				<p>{text}</p>
			</div>
			<BsX
				size={25}
				onClick={removeItem}
			/>
		</div>
	);
};

export default TodoItem;
