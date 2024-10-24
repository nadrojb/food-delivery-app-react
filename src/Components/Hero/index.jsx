function Hero({ text }) {
  return (
    <section className="w-full mt-4 md:px-4 h-60">
      <div className="bg-[url(/burgers.jpg)] w-full h-full bg-cover bg-center content-center">
        <div className="mx-auto items-center bg-white bg-opacity-70 p-6 max-md:w-11/12 w-3/5 max-w-3xl">
          {text ? (
            <h1 className="text-cyan-500 text-5xl text-center">{text}</h1>
          ) : (
            <>
              <h1 className="text-cyan-500 text-5xl text-center">
                Food. Delivered.
              </h1>
              <p className="text-center max-lg:pt-2 py-3">
                Order your favourite food from local restaurants, right to your
                door.
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default Hero;
