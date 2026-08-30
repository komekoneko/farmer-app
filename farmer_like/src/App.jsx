import { BrowserRouter, Routes, Route} from "react-router-dom"
import FarmerProfile from './components/FarmerProfile'
import FarmerList from './components/FarmerList';
import FarmerEdit from "./components/FarmerEdit";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FarmerList />} />
        <Route path="/farmer/:id" element={<FarmerProfile />} />
        <Route path="/edit" element={<FarmerEdit />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
