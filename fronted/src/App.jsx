//rafce
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import NoteDetailsPage from "./pages/NoteDetailsPage";
import toast from "react-hot-toast";

const App = () => {
  return (
    <div>
      <p>welcome to react</p>
      <button onClick={() => toast.success("congrats")}>Click Me</button>
      <button onClick={() => toast.error("error")}>Click Me</button>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDetailsPage />} />
      </Routes>
    </div>
  );
};

export default App;
