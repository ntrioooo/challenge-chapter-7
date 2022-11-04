import ListMobil from '../ListMobil'
import React from 'react'

function refreshPage() {
  window.location.reload();
}

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tipeDriver: '', penumpang: '', tanggal: '', waktu: ''};
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.clear = this.clear.bind(this)
    this.data = this.data.bind(this)
  }

  handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({ [name] : value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.tipeDriver);
    console.log(this.state.penumpang);
    console.log(this.state.tanggal);
    console.log(this.state.waktu);
  }

  clear() {
    return 2
  }

  data(event) {
    event.preventDefault();
    const penumpang = this.state.penumpang;
    console.log(penumpang);
    const data1 = [this.state.penumpang, this.state.tipeDriver, this.state.tanggal, this.state.waktu]

    return data1
  }

  render() {
    return (
      <>
          <div className="container">
            <form onSubmit={this.handleSubmit}>
            <div className="row justify-content-center form">
                <div className="col-md-auto">
                    <label htmlFor="tipeDriver">Tipe Driver</label>
                    <div className="input-group mb-3 tipe-driver">
                        <select className="form-select" id="tipe-driver" name='tipeDriver' value={this.state.value} onChange={this.handleChange}>
                          <option hidden>Pilih Tipe Driver</option>
                          <option value="Pilih Sopir">Semua Mobil</option>
                          <option value="Dengan Sopir">Dengan Sopir</option>
                          <option value="Tanpa Sopir">Tanpa Sopir (Lepas Tangan)</option>
                        </select>
                    </div>
                </div>
                <div className="col-md-auto">
                    <label htmlFor="tipeDriver">Tanggal</label>
                    <div className="input-group mb-3 tanggal">
                        <input type="date" name="tanggal" id="date" placeholder="Pilih Tanggal" value={this.state.tanggal} onChange={this.handleChange} />
                    </div>
                </div>
                <div className="col-md-auto">
                    <label htmlFor="tipeDriver">Waktu Jemput/Ambil</label>
                    <div className="input-group mb-3 waktu">
                      <input type="time" name="waktu" id="time" placeholder="Pilih Waktu" value={this.state.waktu} onChange={this.handleChange} />
                    </div>
                </div>
                <div className="col-md-auto">
                    <label htmlFor="tipeDriver">Jumlah Penumpang (Optional)</label>
                    <div className="input-group mb-3 penumpang">
                        <input type="number" name="penumpang" id="penumpang" placeholder="Jumlah Penumpang" value={this.state.penumpang} onChange={this.handleChange} />
                    </div>
                </div>
                <div className="col-md-auto"><br/>
                  <button type="submit" className="btn mb-3 find-car" id="find-car" name="submit">Cari Mobil</button>
                  <button className="btn mb-3 clear-car" id="clear-car" onClick={refreshPage}>Clear</button>
                </div>
            </div>
            </form>
            <ListMobil submit={this.handleSubmit} data={this.data} penumpang={this.state.penumpang} tipeDriver={this.state.tipeDriver} tanggal={this.state.tanggal} waktu={this.state.waktu}/>
        </div>
        
      </>
    )
  }
}

export default Search