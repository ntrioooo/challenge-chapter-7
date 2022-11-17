import React from 'react';

function Faq() {
  return (
    <div>
      <section id="faq">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <h3>Frequently Asked Question</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div className="col-md-7">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      <p>Apa saja syarat yang dibutuhkan?</p>
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Eius animi ipsam in blanditiis ratione reiciendis
                        inventore expedita quis ipsa possimus?
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      <p>Berapa hari minimal sewa mobil lepas kunci?</p>
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Facere quis fugiat nisi ut id, at excepturi qui nobis magnam explicabo!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      <p>Berapa hari sebelumnya sabaiknya booking sewa mobil?</p>
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quis autem a omnis cumque eveniet quidem necessitatibus perspiciatis
                        aspernatur ab laborum nemo magni inventore,
                        itaque sit soluta commodi consequatur sed fuga,
                        saepe modi est temporibus. Sit obcaecati commodi accusantium sapiente eum?
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFour">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                      <p>Apakah Ada biaya antar-jemput?</p>
                    </button>
                  </h2>
                  <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, earum.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFive">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                      <p>Bagaimana jika terjadi kecelakaan?</p>
                    </button>
                  </h2>
                  <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, earum.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Faq;
