const Header = ({ toggleTheme }) => {

  return (
    <header className="flex justify-between items-center mb-5 py-5">
        <h1 className="text-5xl font-roboto leading-1 text-black dark:text-white">Notes App</h1>
        <button 
            className="py-3 px-8 rounded-full cursor-pointer font-roboto text-white ease-in-out duration-300 hover:bg-slate-500 bg-slate-400"
            onClick={toggleTheme}
        >
            Toggle Mode
        </button>
    </header>
  )
}

export default Header