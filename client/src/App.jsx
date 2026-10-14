import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import CreateProject from "./components/CreateProject";
import ViewProjects from "./components/ViewProjects";
import ManageMembers from "./components/ManageMembers";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-project" element={<CreateProject />} />
        <Route path="/projects" element={<ViewProjects />} />
        <Route
          path="/projects/:projectId/members"
          element={<ManageMembers />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
