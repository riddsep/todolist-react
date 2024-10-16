import BackgroundHeading from "./components/BackgroundHeading";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import TodoList from "./components/TodoList";
function App() {
  return (
    <div className="flex flex-col items-center justify-center font-sans bg-black min-h-screen">
      <BackgroundHeading />
      <main className="w-[972px] h-[636px] rounded-xl backdrop-blur-sm bg-opacity-20 10 border border-gray-100/50 grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr] overflow-hidden">
        <Header />
        <TodoList />
        <Sidebar />
      </main>
      <Footer />
    </div>
  );
}

export default App;
