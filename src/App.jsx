import "./App.css";

function App() {
  return (
    <>
      <header class="p-4 text-center border shadow-lg">
        <p>
          <span class="text-cyan-500">Food</span>Delivery
        </p>
      </header>
      <section class="py-12 px-4 text-center border">
        <div class="border">
          <h1>Food. Delivered.</h1>
          <p>
            Order your favourite food from local restaurants, right to you door
          </p>
        </div>
      </section>
      <section class="flex justify-center flex-wrap gap-4 mt-4">
        <div class="w-11/12 h-16 bg-slate-500"></div>
        <div class="w-11/12 h-16 bg-slate-500"></div>
        <div class="w-11/12 h-16 bg-slate-500"></div>
      </section>
      <footer>
        <p>© Copyright iO Academy 2022</p>
      </footer>
    </>
  );
}

export default App;
