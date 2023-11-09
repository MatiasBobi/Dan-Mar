import "./App.css";
import Navbar from "./containers/navbar/Navbar";
import { Searchitem } from "./containers/searchitems/Searchitem";

function App() {
  return (
    <>
      <Navbar />
      <main className="h-screen bg-gradient-to-b from-[#2E0537] to-[#100963] pt-16">
        <Searchitem />
      </main>
    </>
  );
}

export default App;
