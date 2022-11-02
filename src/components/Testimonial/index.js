import React from 'react'

function Testimonial() {
  return (
    <div>
        <section id="testimonial">
            <div className="container">
                <div className="row">
                <div className="col">
                    <h3 className="text-center">Testimonial</h3>
                    <p className="text-center mt-3 mb-2">Berbagai review positif dari para pelanggan kami</p>
                    <div id="carouselExampleControls" className="carousel slide mx-auto mt-4" style={{maxWidth: "60%", minHeight: "270px"}} data-bs-ride="carousel" data-bs-interval="5000">
                    <div className="carousel-inner">
                        <div className="carousel-item active bg--aliceblue">
                            <div className="row mx-4 my-5">
                                <div className="col-xl-2 m-auto">
                                    <img src="assets/img_photo.png" className="d-block testimonial__img m-auto" alt="Person"/>
                                </div>
                                <div className="col-xl-10">
                                    <img src="assets/Rate.png" className="testimonial__rating" alt="Rating"/>
                                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                                    <p className="testimonial__name">John Dee 32, Bromo</p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item bg--aliceblue">
                            <div className="row mx-4 my-5">
                                <div className="col-xl-2 m-auto">
                                    <img src="assets/img_photo_2.png" className="d-block testimonial__img m-auto" alt="Person"/>
                                </div>
                                <div className="col-xl-10">
                                    <img src="assets/Rate.png" className="testimonial__rating" alt="Rating"/>
                                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod””</p>
                                    <p className="testimonial__name">John Dee 32, Bromo</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        {/* <a type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev" className="testimonial__media">&#8249;</a>
                        <a type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next" className="testimonial__media">&#8250;</a> */}
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Testimonial