
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/Home/home';
import { About } from './pages/About/About';
import { Contact } from './pages/Contact/contact';
import { Footer } from './layouts/Footer';
import { ContextProvider } from './utils/contextProvider';
import { Shop } from './pages/Shop/shop';
function App() {
  return (
    <>
      <ContextProvider>
        <Routes >
          <Route path='/' element={<HomePage />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Shop' element={<Shop />} />
        </Routes >
      </ContextProvider>
    </>

  );
}
export default App;
