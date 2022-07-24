import { Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav";
import CreateDeals from "./Pages/CreateDeals";
import Deals from "./Pages/Deals";
import Searchbar from "./Components/Searchbar";
function App() {
  return (
    <div className=" flex  h-[100vh] bg-[#F5F6F8] ">
      <Nav />

      <div className="flex flex-col w-5/6 ">
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
