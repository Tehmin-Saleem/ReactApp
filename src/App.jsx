import React from 'react';
import './App.css';
import image1 from './images/image1.jpeg';
import image2 from './images/image2.jpeg';
import image3 from './images/image3.jpeg';
import image4 from './images/image4.jpeg';
import image5 from './images/image1.avif';
import image6 from './images/image2.avif';
import image7 from './images/image3.avif';
import image8 from './images/image4.avif';
function App() {
  return (
    <div className="body">
      <header>
        <nav>
          <a href="/" className="navbar">Home Page</a>
          <a href="/" className="navbar">Contact Now</a>
          <a href="/" className="navbar">Customer Information</a>
          <a href="/" className="navbar">Shop Now</a>
          <a href="/" className="login">Login</a>
          <a href="/" className="signup">Signup</a>
        </nav>
      </header>
      <table>
        <caption>Customer Information</caption>
        <tr>
          <th>Customer Name</th>
          <th>Phone Number</th>
          <th>Address</th>
          <th>Purchased Items</th>
          <th>Total Amount</th>
          <th>Image</th>
        </tr>
        <tr>
          <td>Tehmina Saleem</td>
          <td>00000000</td>
          <td>Bahria Town</td>
          <td>6</td>
          <td>2000</td>
          <td><img src={image2}alt="Customer" /></td>
        </tr>
        <tr>
                <td >Tehmina Saleem</td>
                <td >00000000</td>
                <td >Bahria Town</td>
                <td >6</td>
                <td>2000</td>
                <td><img src={image1} alt=" Customer1"/></td>
            </tr>
            <tr>
                <td >Tehmina Saleem</td>
                <td >00000000</td>
                <td >Bahria Town</td>
                <td >6</td>
                <td>2000</td>
                <td><img src={image3} alt=" Customer1"/></td>
            </tr>
            <tr>
                <td >Tehmina Saleem</td>
                <td >00000000</td>
                <td >Bahria Town</td>
                <td >6</td>
                <td>2000</td>
                <td><img src={image4} alt=" Customer1"/></td>
            </tr>
            <tr>
                <td >Tehmina Saleem</td>
                <td >00000000</td>
                <td >Bahria Town</td>
                <td >6</td>
                <td>2000</td>
                <td><img src={image2}alt=" Customer1" /></td>
            </tr>
            <tr>
                <td >Tehmina Saleem</td>
                <td >00000000</td>
                <td >Bahria Town</td>
                <td >6</td>
                <td>2000</td>
                <td><img src={image1}alt=" Customer1"  /></td>
            </tr>
            <tr>
                <td >Tehmina Saleem</td>
                <td >00000000</td>
                <td >Bahria Town</td>
                <td >6</td>
                <td>2000</td>
                <td><img src={image3} alt=" Customer1" /></td>
            </tr>
        {/* Add more rows if needed */}
      </table>
      <div className="slider">
        <h2>Image Slider</h2>
        <img src={image5} alt="Slider Image4" />
        <img src={image6} alt="Slider Image1" />
        <img src={image7} alt="Slider Image2" />
        <img src={image8} alt="Slider Image3" />
      </div>
      <footer>
        <ul className="social-icons">
          <a href="/"><i className="fab fa-facebook-f"></i></a>
          <a href="/"><i className="fab fa-twitter"></i></a>
          <a href="/"><i className="fab fa-instagram"></i></a>
          <a href="/" className="footer">About us</a>
          <a href="/" className="footer">Contact Us</a>
          <a href="/" className="footer">Customer Support</a>
        </ul>
      </footer>
    </div>
  );
}

export default App;

