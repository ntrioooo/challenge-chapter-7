import React from 'react';

function Service() {
  return (
    <div>
      <section id="our__services">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-5">
              <img src="./images/img_service.png" className="img-fluid" alt="Services" />
            </div>
            <div className="col-md-5 ms-5">
              <h3>Best Car Rental for any kind of trip in (Lokasimu)!</h3>
              <p className="mt-4">
                Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih
                <br />
                murah dibandingkan yang lain, kondisi mobil baru, serta kualitas
                <br />
                pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.
              </p>
              <div className="services">
                <img src="./images/Group 53.png" alt="icon" style={{ float: 'left' }} />
                <span className="ms-3">Sewa Mobil Dengan Supir di Bali 12 Jam</span>
              </div>
              <div className="services">
                <img src="./images/Group 53.png" alt="icon" style={{ float: 'left' }} />
                <span className="ms-3">Sewa Mobil Lepas Kunci di Bali 24 Jam</span>
              </div>
              <div className="services">
                <img src="./images/Group 53.png" alt="icon" style={{ float: 'left' }} />
                <span className="ms-3">Sewa Mobil Jangka Panjang Bulanan</span>
              </div>
              <div className="services">
                <img src="./images/Group 53.png" alt="icon" style={{ float: 'left' }} />
                <span className="ms-3">Gratis Antar - Jemput Mobil di Bandara</span>
              </div>
              <div className="services">
                <img src="./images/Group 53.png" alt="icon" style={{ float: 'left' }} />
                <span className="ms-3">Layanan Airport Transfer / Drop In Out</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Service;
