import DeleteButton from "./DeleteButton";
const TodoList = ({ todos, setTodos }) => {
  function handleDelete(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  function handleDone(id) {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  }

  return (
    <ul className="bg-[#0A0A0A] text-white ">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={`flex justify-between items-center px-4 h-12 cursor-pointer bg-[#212121] border-b border-gray-100/50 ${
            todo.isCompleted ? "line-through text-gray-500" : ""
          }`}
          onClick={() => handleDone(todo.id)}
        >
          <span>{todo.text}</span>
          <DeleteButton handleDelete={() => handleDelete(todo.id)} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
