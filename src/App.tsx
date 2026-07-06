import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Background from "./components/Background";

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950">
      <Background />
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;