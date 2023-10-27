import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import NavBar from './component/NavBar';
import Footer from './component/Footer';
import CompleteGalleries from './component/CompleteGalleries';

function App() {
  return (
    <>
    <header>
     <NavBar/>
    </header>
    <main>
    <CompleteGalleries/>
    </main>
    <footer>
     <Footer/>
    </footer>
    </>
  );
}

export default App;
