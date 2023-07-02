import DummyPage from "@/pages/DummyPage";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<DummyPage />} />
    </Routes>
  );
};

export default App;
