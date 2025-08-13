import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Articles from './pages/Articles/Articles';
import Contact from './pages/Contact/Contact';
import Article from './pages/Article/Article';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* La route racine est maintenant '/', ce qui correspond à la page d'accueil */}
        <Route path='/' element={<Home />} />
        
        {/* Les autres routes sont également corrigées */}
        <Route path='/articles' element={<Articles />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/article/:id' element={<Article />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
