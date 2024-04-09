import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../Redux/actions';

function Header() {
  const isLoggedIn = useSelector((state) => state.loggedIn);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div className="mycontainer">
      <header>
        <nav>
          <a href="#" className="navbar">Home Page</a>
          <a href="#" className="navbar">Contact Now</a>
          <a href="#" className="navbar">About Us</a>
          <a href="#" className="navbar">Mobiles data</a>
          {isLoggedIn ? (
            <button className="logout" onClick={handleLogout}>Logout</button>
          ) : (
            <>
              <a href="#" className="login">Login</a>
              
            </>
          )}
        </nav>
      </header>
      <div className="loader" id="loader"></div>
    </div>
  );
}

export default Header;
