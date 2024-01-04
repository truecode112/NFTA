import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'

import BaseLayout from './components/common/BaseLayout'

function App() {
  return (
    <div>
      <Routes>
        <Route element={<BaseLayout />}>
          <Route path='/' element={<LandingPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
