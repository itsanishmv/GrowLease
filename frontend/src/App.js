import { Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav";
import CreateDeals from "./Pages/CreateDeals";
import Deals from "./Pages/Deals";
import Searchbar from "./Components/Searchbar";
function App() {
  return (
    <div className="b-6 flex bg-[#F5F6F8] ">
      <Nav />

      <div className="flex flex-col w-5/6 h-[100vh]">
        <Searchbar />
        <Routes>
          <Route path="/deals" element={<Deals />} />
          <Route path="/createDeals" element={<CreateDeals />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
