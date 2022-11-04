import { GET_LIST_MOBIL  } from "../../actions/mobilAction";

const initialState = {
    getListMobilResult : false,
    getListMobilLoading : false,
    getListMobilError : false,
}

const Mobil = (state = initialState, action) => {
    switch(action.type) {
        case GET_LIST_MOBIL:
            return {
                ...state,
                getListMobilResult: action.payload.data,
                getListMobilLoading: action.payload.loading,
                getListMobilError: action.payload.errorMessage
            }
        default:
            return state
    }
}

export default Mobil;