import { Route, Routes } from "react-router-dom";
import AdminPanel from "./Components/AdminPanel";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<AdminPanel />} />
      </Routes>
    </div>
  );
}

export default App;
