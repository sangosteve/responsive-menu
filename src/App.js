import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import { SidebarProvider } from "./contexts/SidebarContext";

function App() {
  return (
    <SidebarProvider>
      <div className="App">
        <Sidebar />

        <div className="App-Contents">
          <Header />
        </div>
      </div>
    </SidebarProvider>
  );
}

export default App;
