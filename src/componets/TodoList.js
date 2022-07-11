import React from "react";
import { useState, useEffect } from "react";

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState("");

    const handleSubmit = (e) => {
        if (e.target.value !== "") {
            setTodos(e.target.value);
        }
    };
    const AddTodo = (e) => {
        e.preventDefault();
        if (todo !== "") {
            const newTodo = {
                id: new Date().getTime(),
                text: todo,
                completed: false,
            };
            setTodos([...todos].concat(newTodo));
            setTodo("");
        }
    };
    const DeleteItem = (e, id) => {
        e.preventDefault();
        setTodos(todos.filter((t) => t.id !== id));
    };
    const CompletedTodo = (e, id) => {
        e.preventDefault();
        const elemt = todos.findIndex((elem) => elem.id === id);
        const newList = [...todos];
        newList[elemt] = {
            ...newList[elemt],
            completed: true,
        };
        setTodos(newList);
    };
    return (
        <div id="todo-list">
            <h1>Todo-input</h1>
            <form id="boxForm" onSubmit={handleSubmit}>
                <input
                    type="text"
                    onChange={(e) => setTodo(e.target.value)}
                    value={todo}
                    placeholder="Enter your Todo"
                />
                <button type="submit" className="addBtn" onClick={AddTodo}>
                    Add Todo
                </button>
            </form>
            <div className="todoList">
                <b className="todoList"> TodoList</b>
            </div>
            {todos.map((todo) => (
                <div key={todo.id} className="todo">
                    <div className="todoDetails">
                        <p
                            style={{
                                textDecoration: todo.completed ? "line-through" : "none",
                            }}
                        >
                            {todo.text}
                        </p>
                    </div>
                    <div className="boxButton">
                        <button onClick={(e) => DeleteItem(e, todo.id)} id="deleteBtn">
                            Delete
                        </button>
                        <button onClick={(e) => CompletedTodo(e, todo.id)} id="completeBtn">
                            completed
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TodoList;
