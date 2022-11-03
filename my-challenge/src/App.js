import NabvarForm from "./components/navbar/Nabvar";
import { Routes, Route } from "react-router-dom";
import InterfaceAlta from "./components/interface/InterfaceAlta";
import InterfaceBaja from "./components/interface/InterfaceBaja";
import InterfaceCambio from "./components/interface/InterfaceCambio";
import InterfaceConsulta from "./components/interface/InterfaceConsulta";

function App() {
  return (
    <div>
      <NabvarForm />
      <Routes>
        <Route path="/interfaceAlta" element={<InterfaceAlta />} />
        <Route path="/interfaceBaja" element={<InterfaceBaja />} />
        <Route path="/interfaceCambio" element={<InterfaceCambio />} />
        <Route path="/interfaceConsulta" element={<InterfaceConsulta />} />
      </Routes>
    </div>
  );
}
/*
return (
  <>
  <NabvarForm />
  <Routes>
    <Route path="/interface" element={<Interface />} />
  </Routes>
</>
);
*/
export default App;
