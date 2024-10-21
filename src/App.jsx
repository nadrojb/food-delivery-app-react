function App() {
  return (
    <>
      <header className="p-4 text-center shadow-lg md:text-left">
        <p>
          <span className="text-cyan-500">Food</span>Delivery
        </p>
      </header>
      <section className="flex justify-center items-center py-10 px-4 mt-4 bg-[url(/public/burgers.jpg)] bg-cover bg-center md:mx-4 h-40 md:h-64"></section>
      <section className="flex justify-center flex-wrap gap-4 mt-4 md:justify-start md:px-4"></section>
      <footer className="p-4 border-t-2 mt-4 mx-4">
        <p>© Copyright iO Academy 2022</p>
      </footer>
    </>
  );
}

export default App;
