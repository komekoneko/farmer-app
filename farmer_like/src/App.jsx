import { BrowserRouter, Routes, Route} from "react-router-dom"
import FarmerProfile from './components/FarmerProfile'
import FarmerList from './components/FarmerList';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FarmerList />} />
        <Route path="/farmer/:id" element={<FarmerProfile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
