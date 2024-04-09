
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, logoutUser, fetchData } from '../Redux/actions';
import image1 from '../images/image1.jpeg';

const MobilesData = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const mobileData = useSelector((state) => state.userData);
  const isLoggedIn = useSelector((state) => state.loggedIn);
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(loginUser()); // Dispatch loginUser action to set loggedIn to true
  };

  const handleFetchData = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('https://freetestapi.com/api/v1/mobiles');
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }
      const json = await res.json();
      dispatch(fetchData(json)); 
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mycontainer1">
      <div className="loader" style={{ display: isLoading ? 'block' : 'none' }}></div>
      <div className="container1">
        <img src="../src/images/image1.avif" alt="" width="100%" height="50%" />
        <div className="text">Find the best Mobile</div>
        <div className="login-form">
          {!isLoggedIn ? (
            <form>
             <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
             <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />

              <button type="button" onClick={handleLogin}>Login</button>
            </form>
          ) : (
            <button onClick={handleFetchData}>Find Mobile</button>
          )}
        </div>
        {mobileData && (
          <div>
            {mobileData.map((mobile) => (
              <div key={mobile.id} className="mobile-details">
                <strong>ID:</strong> {mobile.id}
                <img
                  src={image1}
                  alt=""
                  width="100"
                  height="100"
                  style={{ cursor: 'pointer', display: 'flex', flexWrap: 'wrap', marginLeft: 'auto', marginRight: 'auto' }}
                  onClick={() => showDetails(mobile)}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const showDetails = (mobile) => {
  const newWindow = window.open('', '_blank');
  newWindow.document.write(`
    <html>
      <head>
        <title>Mobile Details</title>
      </head>
      <body>
        <h2>Mobile Details</h2>
        <h3>Title : ${mobile.id}</h3>
        <h3>Brand : ${mobile.brand}</h3>
        <h3>Price : ${mobile.price}</h3>
        <h3>Display Size:${mobile.display_size}</h3>
        <img src="${image1}" />
        <div style={{ marginBottom: "10px" }}></div>
      </body>
    </html>
  `);
  newWindow.document.close();
};

export default MobilesData;







// import React, { useState } from 'react';
// import image1 from '../images/image1.jpeg';

// const MobilesData = () => {
//     const [isLoading, setIsLoading] = useState(false);
//     const [mobileData, setMobileData] = useState([]);

//     const fetchData = async () => {
//         setIsLoading(true);
//         try {
//             const res = await fetch('https://freetestapi.com/api/v1/mobiles');
//             if (!res.ok) {
//                 throw new Error('Failed to fetch data');
//             }
//             const json = await res.json();
//             setMobileData(json);
//         } catch (error) {
//             console.error(error);
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     const displayMobileData = () => {
//         return mobileData.map((mobile) => (
//             <div key={mobile.id} className="mobile-details">
//                  <strong>ID:</strong> {mobile.id}
               
//                 <img
//                     src={image1}
//                     alt=""
//                     width="100"
//                     height="100"
//                     style={{ cursor: 'pointer', display: 'flex',flexWrap:'wrap', marginLeft: 'auto', marginRight: 'auto' }}
//                     onClick={() => showDetails(mobile)}
//                 />
                
//             </div>
//         ));
//     };

//     const showDetails = (mobile) => {
//         const newWindow = window.open('', '_blank');
//         newWindow.document.write(`
//             <html>
//                 <head>
//                     <title>Mobile Details</title>
//                 </head>
//                 <body>
//                 <h2>Mobile Details</h2>
//                     <h3>Title : ${mobile.id}</h3>
//                     <h3>Brand : ${mobile.brand}</h3>
//                     <h3>Price : ${mobile.price}</h3>
//                     <h3>Display Size:${mobile.display_size}</h3>

//                     <img src="${image1}" />
//                     <div style={{ marginBottom: "10px" }}></div>
//                 </body>
//             </html>
//         `);
//         newWindow.document.close();
//     };

//     return (
//         <div className="mycontainer1">
//             <div className="loader" style={{ display: isLoading ? 'block' : 'none' }}></div>
//             <div className="container1">
//                 <img src="../src/images/image1.avif" alt="" width="100%" height="50%" />
//                 <div className="text">Find the best Mobile</div>
//                 <div className="button">
//                     <button onClick={fetchData}>Find Mobile</button>
//                 </div>
//                 <div>{displayMobileData()}</div>
//             </div>
//         </div>
//     );
// };

// export default MobilesData;