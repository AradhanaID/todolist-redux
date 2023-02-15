import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

const Todo = () => {
	const todos = useSelector((state) => state.todo);
	
	return (
		<div className='text-white'>
			<h1 className='text-4xl text-center'>To Do List</h1>
			<TodoForm />
			<div>
				{todos.map((todo, index) => <TodoItem todo={todo} key={index}/>)}
			</div>
		</div>
	);
};

export default Todo;
