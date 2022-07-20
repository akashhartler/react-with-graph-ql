import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import RepositoryList from './views/RepositoryList';

function App() {

  return (
    <div className="App">
     <Header/>
     <RepositoryList />
     <Footer/>
    </div>
  );
}

export default App;
