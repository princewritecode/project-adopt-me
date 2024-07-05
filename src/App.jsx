import { createRoot } from "react-dom/client";
import SearchParams from "./SearchParams";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./Details";
import { Link } from "react-router-dom";
const App = () =>
{
  return (
    <BrowserRouter>

      <header>
        <Link to='/'>
          Adopt Me!</Link>
      </header>
      <Routes>
        <Route path="/details/:id" element={<Details></Details>}></Route>
        <Route path="/" element={<SearchParams></SearchParams>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

export default App;