import "./App.css";
import Navbar from "@/components/Navbar";
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";

function App() {
  return (
    <div className="h-screen w-screen bg-black text-white flex flex-col">
      <Navbar />
      <main className="flex-1 min-h-0 pt-16 px-4">
        <div className="h-full w-full rounded-lg flex items-stretch">
          <div className="min-w-0 p-3 overflow-auto basis-1/4 h-full">
            <LeftPanel />
          </div>
          <div className="w-px bg-white/20" />
          <div className="min-w-0 p-3 overflow-auto basis-3/4 h-full">
            <RightPanel />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
