const Counter = ({ todos }) => {
  return (
    <p className="text-white">
      <b>{todos.filter((todo) => todo.isCompleted).length}</b> / {todos.length}{" "}
      todos completed
    </p>
  );
};

export default Counter;
