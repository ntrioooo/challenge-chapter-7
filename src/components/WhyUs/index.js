import React from 'react'

function WhyUs() {
  return (
    <div>
        <section id="why__us">
        <div className="container">
            <h3>Why Us</h3>
            <p className="mt-2">Mengapa harus pilih Binar Car Rental?</p>
            <div className="row mt-4">
                <div className="col-md-3">
                    <div className="card card__border--warning">
                        <img src="assets/icon_complete.png" className="card-img-top" style={{width: "32px", marginLeft: "16px", marginTop: "16px"}} alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Mobil Lengkap</h5>
                            <p className="card-text text--warning">Tersedia banyak pilihan mobil,<br/> kondisi masih baru, bersih dan <br/>terawat</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card card__border--danger">
                        <img src="assets/icon_price.png" className="card-img-top" style={{width: "32px", marginLeft: "16px", marginTop: "16px"}} alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Mobil Murah</h5>
                            <p className="card-text text--danger">Harga murah dan bersaing, bisa <br/> bandingkan harga kami dengan<br/> rental mobil lain</p>
                        </div>
                    </div>
                </div>
            <div className="col-md-3">
                <div className="card card__border--darkblue">
                <img src="assets/icon_24hrs.png" className="card-img-top" style={{width: "32px", marginLeft: "16px", marginTop: "16px"}} alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Layanan 24 Jam</h5>
                    <p className="card-text text--darkblue">Siap melayani kebutuhan Anda <br/>selama 24 jam nonstop. Kami juga<br/> tersedia di akhir minggu</p>
                </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card card__border--limegreen">
                <img src="assets/icon_professional.png" className="card-img-top" style={{width: "32px", marginLeft: "16px", marginTop: "16px"}} alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Sopir Profesional</h5>
                    <p className="card-text text--limegren">Sopir yang profesional,<br/> berpengalaman, jujur, ramah dan<br/> selalu tepat waktu</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    </div>
  )
}

export default WhyUs