import './App.css';
import Navigation from './Customer/Components/Navigation/Navigation.jsx';
import HomePage from './Customer/Pages/HomePage/HomePage.jsx';
import Footer from './Customer/Components/Footer/Footer.jsx';

function App() {
  return (
    <div className="">
      <Navigation />
      <div>
        <HomePage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
