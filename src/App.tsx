import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Sports } from "./components/Sports";
import { Spaces } from "./components/Spaces";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="bg-white text-gray-900 font-sans antialiased overflow-x-hidden selection:bg-accent selection:text-black">
      <Header />
      <Hero />
      <About />
      <Sports />
      <Spaces />
      <Footer />
    </div>
  );
}

export default App;
