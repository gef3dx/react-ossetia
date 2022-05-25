import {Routes, Route} from 'react-router-dom'

import Base from './components/Base'
import Home from'./pages/Home'
import News from'./pages/News'
import Films from'./pages/Films'


function App() {
  return (
            <Routes>
              <Route path='/' element={<Base />}>
                <Route index element={<Home />} />
                <Route path='news' element={<News />} />
                <Route path='films' element={<Films />} />
                <Route path='*' element={<Home />} />
              </Route>
            </Routes>
  );
}

export default App;
