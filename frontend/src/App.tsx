import "./App.css";
import Navbar from "@/components/Navbar";
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";

function App() {
  return (
    <div className="h-screen w-screen bg-black text-white flex flex-col">
      <Navbar />
      <main className="flex-1 min-h-0 pt-16 px-4">
        <div className="mx-auto w-full max-w-7xl h-full mt-4">
          {/* Mobile: stacked panels */}
          <div className="md:hidden space-y-4 h-full overflow-auto">
            <LeftPanel />
            <RightPanel />
          </div>

          {/* Desktop: resizable panels */}
          <div className="hidden h-full md:block">
            <ResizablePanelGroup
              direction="horizontal"
              className="h-full w-full rounded-lg border border-white/10"
            >
              <ResizablePanel
                defaultSize={35}
                minSize={28}
                className="min-w-0 p-3 overflow-auto"
              >
                <LeftPanel />
              </ResizablePanel>
              <ResizableHandle withHandle className="border-white/20" />
              <ResizablePanel
                defaultSize={65}
                minSize={40}
                className="min-w-0 p-3 overflow-auto"
              >
                <RightPanel />
              </ResizablePanel>
            </ResizablePanelGroup>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
