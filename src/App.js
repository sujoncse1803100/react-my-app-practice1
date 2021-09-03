import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import User from './Components/User/User.js';
import NavBar from './Components/NavBar/NavBar.js';
import Cart from './Components/Cart/Cart';
import Data from './Data/user_info.json';

function App() {
  const users = Data.slice(0, 20)
  const [user, setUser] = useState([]);

  const handleClick = (addedUser) => {
    const newUsers = [...user, addedUser];
    setUser(newUsers);
}

  return (
    <div >
      <header className="fixed-top">
          <NavBar />
      </header>
      <main className="container d-block mt-5 ">

        <div className="row">
          <div className="col-lg-9 user-div">
            {
              users.map((currentUser)=> <User handleClick={handleClick} user={ currentUser } />)
            }
          </div>
          <div className="col-lg-3 d-flex justify-content-end pt-2  cart-div position-fixed position-absolute top-5 end-0">
            <div className="">
            
              <Cart user={user} />
              
            </div>
          </div>
        </div>
        
      </main>
    </div>
  );
}

export default App;
