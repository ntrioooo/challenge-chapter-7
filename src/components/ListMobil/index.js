import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getListMobil } from '../../actions/mobilAction';
import Navbar from '../Navbar'

function ListMobil() {
    const { getListMobilResult, getListMobilLoading, getListMobilError } = useSelector((state) => state.MobilReducer)

    const dispatch = useDispatch();

    useEffect(() => {

        // get mobil
        console.log("1. use effect component");
        dispatch(getListMobil());

    }, [dispatch])

    return (
        <div>
            <Navbar/>
            <div className="container">
                <h4 style={{ paddingTop: "3em" }}>List Mobil</h4>
                <div className="row">
                    {getListMobilResult ? (
                        getListMobilResult.map((mobil) => {
                            return (
                                    <div className="col-md-4">
                                        <div className="card mb-3">
                                            <img src={mobil.image} alt="" className='card-img-top' style={{ height: "350", width: "300" }}/>
                                            <div className="card-body">
                                                <p className="card-text mb-2">
                                                    {mobil.type} {mobil.model}
                                                </p>
                                                <h5 className="card-title mb-2">
                                                    Rp{mobil.rentPerDay} / Hari
                                                </h5>
                                                <p className="card-text mb-2">{mobil.description}</p>
                                                <p className="card-text mb-2 ">{mobil.capacity}</p>
                                                <p className="card-text mb-2 ">{mobil.transmission}</p>
                                                <p className="card-text mb-2 ">{mobil.year}</p>
                                            </div>
                                        </div>
                                    </div>
                            )
                        })
                        ) : getListMobilLoading ? (
                            <p>Loading ...</p>
                            ) : (
                                <p>{getListMobilError ? getListMobilError : "Data Kosong"}</p>
                                )}
                </div>
            </div>
            
        </div>
    );
}

export default ListMobil;