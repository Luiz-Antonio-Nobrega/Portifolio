import { Routes, Route } from 'react-router-dom';
import './App.css'
import Base from './pages/base'
import Main from './Components/Main/Main';
import ContactPage from './pages/Contato';
function App() {

  return (
    <Routes>
      <Route path="/Portifolio" element={<Base />}>
        <Route index element={<Main />} />
      </Route>
      <Route path="/Portifolio/Contato" element={<ContactPage />} />
    </Routes>
  )
}

export default App
