export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //token: 'BQDoq9l79o7QjjyHM1F1YIMIvYbmGSJtgi5Ayo-mGDYhJ_DHm_6EqsaaftFI_9p5m7yJzoQxSis9tHg_xHATl_oorzKKd4vZzs-n7u6aPzQakxV0La8DPqDSXORO-0mw2NBxjnMpjzEkW6lgaStAaMgs1vNbyfO5IGlVc_LH6KHMK15XMA7hU9fKOkDy80P2D4zHQDmylvd_6Lgr',
};

const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case 'SET_USER': 
        return {
            ...state,
            user: action.user
        };
        case 'SET_TOKEN':
            return{
                ...state,
                token: action.token,
            };
        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists: action.playlists,
            }

        case 'SET_DISCOVER_WEEKLY':
            return{
                ...state,
                discover_weekly: action.discover_weekly,
            }

        case 'SET_SEARCH':
            return {
                ...state,
                SearchData: action.SearchData,
            }
        default:
            return state;
    }
}

export default reducer;