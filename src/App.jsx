import Banner from "./components/Banner";
import Form from "./layout/Form";
import Header from "./layout/Header";
import useDark from "./utils/useDark";

function App() {
  const { dark, setDark } = useDark();

  return (
    <div className="w-full min-h-screen bg-light dark:bg-dark bg-center bg-cover ">
      <div className="min-h-screen bg-opacity-50 bg-neutral-600 backdrop-blur-lg bg-white-700/50">
        <Banner />
        <main className="lg:w-9/12 p-4 mx-auto  grid gap-6 lg:grid-cols-3 lg:grid-rows-auto text-neutral-200">
          <Header dark={dark} setDark={setDark} />

          <Form />

          <section className="bg-black/20 p-4 rounded-2xl lg:col-span-2 lg:row-span-1">
            cart list
          </section>
          <aside className="bg-black/20 p-4 rounded-2xl lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-4">
            details
          </aside>
        </main>
      </div>
    </div>
  );
}

export default App;
