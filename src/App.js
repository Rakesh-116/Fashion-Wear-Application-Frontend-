import './App.css';
import Navigation from './Customer/Components/Navigation/Navigation.jsx';
import HomePage from './Customer/Pages/HomePage/HomePage.jsx';
import Footer from './Customer/Components/Footer/Footer.jsx';
import Product from './Customer/Components/Product/Product.jsx';

function App() {
  return (
    <div className="">
      <Navigation />
      <div>
        {/* <HomePage /> */}
        <Product />
      </div>
      <Footer />
    </div>
  );
}

export default App;
