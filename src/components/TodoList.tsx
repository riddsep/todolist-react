import DeleteButton from "./DeleteButton";
import { useState } from "react";
const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Belajar React", isCompleted: false },
    { id: 2, text: "Kerjakan tugas bootcamp", isCompleted: true },
    { id: 3, text: "Baca dokumentasi JavaScript", isCompleted: false },
    { id: 4, text: "Refactor project admin panel", isCompleted: false },
    { id: 5, text: "Istirahat sejenak", isCompleted: false },
  ]);

  return (
    <ul className="bg-[#0A0A0A] text-white ">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={`flex justify-between items-center px-4 h-12 cursor-pointer bg-[#212121] border-b border-gray-100/50 ${
            todo.isCompleted ? "line-through text-gray-500" : ""
          }`}
        >
          <span>{todo.text}</span>
          <DeleteButton id={todo.id} setTodos={setTodos}>
            X
          </DeleteButton>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
