const Button = ({ children, buttonType }) => {
  return (
    <button
      className={`text-white hover:opacity-80 rounded w-full px-4 py-2 border border-[#333] ${
        buttonType === "secondary" ? "bg-transparent" : "bg-[#212121]"
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
