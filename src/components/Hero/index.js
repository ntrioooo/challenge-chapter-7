import React from 'react'
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div>
    <main id="home">
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 my-auto text__animation">
            <h2>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h2>
            <p className="mt-3">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas<br className="d-none d-sm-block"/> terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu <br className="d-none d-sm-block"/> untuk sewa mobil selama 24 jam.</p>
            <Link to= "/list-mobil">
                <button type="button" className="button">Mulai Sewa Mobil</button>
            </Link>
          </div>
          <div className="col-md-6">
            <img src="./images/img_car.png" alt="Image Car" className="img-car"/>
          </div>
        </div>
      </div>
    </main>
    </div>
  )
}

export default Hero