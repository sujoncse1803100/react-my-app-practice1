import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyCard from './Components/Card/Card.js';
import NavBar from './Components/NavBar/NavBar.js';
import Cart from './Components/Cart/Cart';

function App() {


  return (
    <div >
      <header className="fixed-top">
          <NavBar />
      </header>
      <main className="container d-block mt-5 ">

        <div className="row">
          <div className="col-md-9">
            <MyCard />
          </div>
          <div className="col-md-3 d-flex justify-content-end pt-2  cart-div position-fixed position-absolute top-5 end-0">
            <div className="">
              <Cart/>
            </div>
          </div>
        </div>
        
      </main>
    </div>
  );
}

export default App;
