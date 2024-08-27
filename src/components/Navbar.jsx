function Navbar({ isDownloadActive, setDownloadActive }) {
  const handleClick = () => {
    if (isDownloadActive === false) {
      setDownloadActive(true);
    }
  };
  return (
    <nav className="flex bg-indigo-500 w-full text-white text-lg hover:cursor-pointer p-3 font-semibold justify-between items-center">
      <div>
        <p className="flex flex-row gap-1 items-center">
          Resume Builder{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 256 256"
          >
            <path
              fill="white"
              d="m210.09 43.19l-130.25-23a12 12 0 0 0-13.91 9.73l-29.75 169a12 12 0 0 0 9.73 13.9l130.26 23a11.6 11.6 0 0 0 2.11.19a12 12 0 0 0 11.79-9.92l29.75-169a12 12 0 0 0-9.73-13.9m1.85 12.51l-29.75 169a4 4 0 0 1-4.63 3.25l-130.26-23a4 4 0 0 1-3.24-4.63l29.75-169a4 4 0 0 1 4.63-3.25l130.26 23a4 4 0 0 1 3.24 4.63m-27.8 19.47a4 4 0 0 1-3.93 3.3a4 4 0 0 1-.7-.06l-83-14.66a4 4 0 1 1 1.39-7.88l83 14.66a4 4 0 0 1 3.24 4.64m-5.54 31.51a4 4 0 0 1-3.94 3.31a3.4 3.4 0 0 1-.7-.07L91 95.27a4 4 0 1 1 1.39-7.88l83 14.66a4 4 0 0 1 3.21 4.63m-47 24.19a4 4 0 0 1-3.94 3.3a4 4 0 0 1-.7-.06l-41.49-7.33a4 4 0 1 1 1.39-7.87l41.49 7.32a4 4 0 0 1 3.21 4.64Z"
            />
          </svg>
        </p>
      </div>
      <div>
        <button
          className="border-2 p-2 text-base rounded-lg hover:cursor-pointer hover:bg-indigo-600 border-red-100"
          onClick={() => handleClick()}
        >
          Download Resume
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
