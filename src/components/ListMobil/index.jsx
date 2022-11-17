import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faGear, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { getListMobil } from '../../actions/mobilAction';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function waktuMobil(hasil) {
  const isPositive = getRandomInt(0, 1) === 1;
  const timeAt = new Date();
  const mutator = getRandomInt(1000000, 100000000);
  hasil = new Date(timeAt.getTime() + (isPositive ? mutator : -1 * mutator));
  return hasil;
}

function ListMobil({
  submit,
  data,
  penumpang,
  tipeDriver,
  tanggal,
  waktu,
}) {
  const {
    getListMobilResult,
    getListMobilLoading,
    getListMobilError,
  } = useSelector((state) => state.MobilReducer);

  const dispatch = useDispatch();
  const jPenumpang = penumpang;
  const tDriver = tipeDriver === 'Dengan Sopir' === true;
  const d = (`${tanggal}T${waktu}`);
  const formdate = Date.parse(d);

  useEffect(() => {
    // get mobil
    // console.log('1. use effect component');
    dispatch(getListMobil());
  }, [dispatch]);

  return (
    <div>
      <div className="container mt-4" data-testid="listmobil-1">
        <div className="row">
          {getListMobilResult ? (
            getListMobilResult
              .filter(
                (mobil) => mobil.capacity >= jPenumpang
                    && mobil.available === tDriver
                    && Date.parse(waktuMobil(mobil.availableAt)) > formdate,
              )
              .map((mobil) => (
                <div className="col-md-4" key={mobil.id}>
                  <div className="card mb-3">
                    <img
                      src={`https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/public/images/${
                        mobil.image.split('/')[2]
                      }`}
                      className="card-img-top"
                      style={{ height: '300px', minWidth: '300px' }}
                      alt={mobil.manufacture}
                    />
                    <div className="card-body">
                      <p className="card-text mb-2">
                        {mobil.type}
                        {mobil.model}
                      </p>
                      <h5 className="card-title mb-2">
                        Rp
                        {mobil.rentPerDay}
                        / Hari
                      </h5>
                      <p className="card-text mb-2">{mobil.description}</p>
                      <p className="card-text mb-2 ">
                        <FontAwesomeIcon icon={faUserGroup} />
                        {mobil.capacity}
                      </p>
                      <p className="card-text mb-2 ">
                        <FontAwesomeIcon icon={faGear} />
                        {mobil.transmission}
                      </p>
                      <p className="card-text mb-2 ">
                        <FontAwesomeIcon icon={faCalendar} />
                        {' '}
                        {mobil.year}
                      </p>
                    </div>
                  </div>
                </div>
              ))
          ) : getListMobilLoading ? (
            <p>Loading ...</p>
          ) : (
            <p>{getListMobilError ? getListMobilError : 'Data Kosong'}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ListMobil;
