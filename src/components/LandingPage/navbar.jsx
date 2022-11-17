import * as React from 'react';
import { GoogleLogin } from 'react-google-login';
import { useState, useEffect } from 'react';

async function doLoginWithGoogle(token) {
  // Sesuaikan endpoint
  const response = await fetch('http://localhost:8000/v1/auth/google', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      token,
    }),
  });
  const data = await response.json();
  return data.token;
}

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState('false');
  const [isLoading, setIsLoading] = useState('false');
  const token = localStorage.getItem('token');

  useEffect(() => {
    setIsLoggedIn(!!token);
  }, [token]);

  function handleLogout(e) {
    setIsLoading(true);
    e.preventDefault();
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setIsLoading(false);
  }

  const haldleSuccessGoogle = (response) => {
    // console.log(response);
    // console.log(response.tokenId);
    if (response.tokenId) {
      doLoginWithGoogle(response.tokenId)
        .then((_token) => {
          localStorage.setItem('token', response.tokenId);
          setIsLoggedIn(response.tokenId);
        })
        .catch((err) => console.log(err.message))
        .finally(() => setIsLoading(false));
    }
  };

  const haldleFailureGoogle = (response) => {
    console.log(response);
    alert(response);
  };
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light" style={{ backgroundColor: '#F1F3FF' }}>
        <div className="container">
          <a className="navbar-brand" href="/"><img src="./images/logo.png" alt="Logo" /></a>
          <button className="btn btn__offcanvas" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#our__services">Our Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#why__us">Why Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#testimonial">Testimonial</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#faq">FAQ</a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              {!isLoggedIn ? (
                <GoogleLogin
                  clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                  buttonText="Login asdasd"
                  onSuccess={haldleSuccessGoogle}
                  onFailure={haldleFailureGoogle}
                  cookiePolicy="single_host_origin"
                />
              ) : (
                <input type="submit" className="btn btn-danger" value="Logout" onClick={handleLogout} />
              )}
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
