import * as React from 'react';
import { useState, useEffect } from 'react';
import { GoogleLogin } from 'react-google-login';
import Navbar from '../LandingPage/navbar';

async function doLogin({ email, password }) {
  const response = await fetch('http://localhost:3001/api/v1/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  const data = await response.json();
  return data.token;
}

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

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState('false');
  const [isLoading, setIsLoading] = useState('false');
  const token = localStorage.getItem('token');

  useEffect(() => {
    setIsLoggedIn(!!token);
  }, [token]);

  const handleSubmit = (e) => {
    setIsLoading(true);
    e.preventDefault();
    doLogin({ email, password })
      .then((_token) => localStorage.setItem('token', token))
      .catch((err) => console.log(err.message))
      .finally(() => setIsLoading(false));
  };

  function handleLogout(e) {
    setIsLoading(true);
    e.preventDefault();
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setIsLoading(false);
  }

  const haldleSuccessGoogle = (response) => {
    console.log(response);
    console.log(response.tokenId);
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

  console.log(email, password, token);

  return (
    <div>
      <Navbar />
      <div className="justify-content-center my-3 form-signin">
        <h1 className="h3 fw-normal text-center py-5">
          Please Login
        </h1>
        {!isLoggedIn ? (
          <form onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
              <input type="email" id="email" className="form-control" required onChange={(e) => setEmail(e.target.value)} />
              <label className="form-label" htmlFor="email">Email address</label>
            </div>
            <div className="form-floating mb-3">
              <input type="password" id="password" className="form-control" required onChange={(e) => setPassword(e.target.value)} />
              <label htmlFor="password" className="form-label">Password</label>
            </div>
            <input type="submit" className="btn btn-primary me-3" value={isLoading ? 'Login' : 'Login'} />
            <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
              buttonText="Login with Google"
              onSuccess={haldleSuccessGoogle}
              onFailure={haldleFailureGoogle}
              cookiePolicy="single_host_origin"
            />

          </form>
        ) : (
        // <Navigate to = '/'></Navigate>
          <input type="submit" className="btn btn-danger" value="Logout" onClick={handleLogout} />
        )}
      </div>
    </div>
  );
}

export default Login;
