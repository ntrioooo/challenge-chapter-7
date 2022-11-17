import axios from 'axios';

export const GET_LIST_MOBIL = 'GET_LIST_MOBIL';

export const getListMobil = () => (dispatch) => {
  dispatch({
    type: GET_LIST_MOBIL,
    payload: {
      loading: true,
      data: false,
      errorMessage: false,
    },
  });

  // get API
  axios({
    method: 'GET',
    url: 'https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json',
    timeout: 120000,
  })
    .then((response) => {
    //   console.log('3. Berhasil dapat API');
      // berhasil
      dispatch({
        type: GET_LIST_MOBIL,
        payload: {
          loading: false,
          data: response.data,
          errorMessage: false,
        },
      });
    })
    .catch((error) => {
    //   console.log('3. Gagal dapat API', error);
      // error
      dispatch({
        type: GET_LIST_MOBIL,
        payload: {
          loading: false,
          data: false,
          errorMessage: error.message,
        },
      });
    });
};
