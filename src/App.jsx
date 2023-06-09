import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SidebarMenu } from "./components/SidebarMenu";
import { MedicalRecord } from "./pages/MedicalRecord";
import { Notes } from "./pages/Notes";
import { Prescription } from "./pages/Prescription";
import { Dialysis } from "./pages/Dialysis";
import { Settings } from "./pages/Settings";
import { Profile } from "./pages/Profile";
import "./styles/main.scss";


function App() {
  const [closeMenu, setCloseMenu] = useState(false);

  const handleCloseMenu = () => {
    setCloseMenu(!closeMenu);
  };

  return (
    <Router>
      <div className="App">
        <SidebarMenu
          closeMenu={closeMenu}
          handleCloseMenu={handleCloseMenu}
        />
        <div className={closeMenu ? 'contentOpen' : "contentClosed"}>
          <Routes>
            <Route path="/" element={<MedicalRecord />} />
            <Route path="/dialysis" element={<Dialysis />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/prescription" element={<Prescription />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
