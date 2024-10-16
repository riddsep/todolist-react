import Counter from "./Counter";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-5 bg-[#0A0A0A] col-[1/3] row-[1/2] border-b border-b-slate-100/50">
      <Logo />
      <Counter />
    </header>
  );
};

export default Header;
