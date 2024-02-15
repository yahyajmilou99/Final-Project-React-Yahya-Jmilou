
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/Home/home';
import { About } from './pages/About/About';
import { Contact } from './pages/Contact/contact';
import { Footer } from './layouts/Footer';
function App() {
  return (
    <>
      <Routes >
        <Route path='/' element={<HomePage />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Footer' element={<Footer />} />
      </Routes >
    </>

  );
}
export default App;
