import React from 'react'

function Footer() {
  return (
    <div>
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <p>Jalan Suroyo No. 161 Mayangan Kota <br className="visible-xs"/>Probolonggo 672000</p>
            <p>binarcarrental@gmail.com</p>
            <p>081-233-334-808</p>
          </div>
          <div className="col-md-2 navigation">
            <p><a href="#our-services">Our services</a></p>
            <p><a href="#why-us">Why Us</a></p>
            <p><a href="#testimonial">Testimonial</a></p>
            <p><a href="#faq">FAQ</a></p>
          </div>
          <div className="col-md-4">
            <p>Connect with us</p>
            <div className="icon-footer">
              <a href="https://www.facebook.com/"><img src="./images/icon_facebook.png" alt="fb"/></a>
              <a href="https://www.instagram.com/ntrioooo/"><img src="./images/icon_instagram.png" alt="ig"/></a>
              <a href="https://twitter.com/inobraaain/"><img src="./images/icon_twitter.png" alt="twt"/></a>
              <a href="https://mail.google.com/mail/"><img src="./images/icon_mail.png" alt="mail"/></a>
              <a href="https://www.twitch.tv/"><img src="./images/icon_twitch.png" alt="twitch"/></a>
            </div>
          </div>
          <div className="col-md-3">
            <p>Copyright Binar 2022</p>
            <a href="https://www.binaracademy.com/"><img src="./images/logo.png" alt="logo"/></a>
          </div>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer