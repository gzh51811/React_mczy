import * as Types from './../actions/type';



let initState = {

}
export default (state = initState, action = {}) => {
    switch (action.type) {
        case Types.FETCH_TOKEN:
            return Object.assign({}, state, {
                isFetching: true,
                isAuthenticated: false,
                admin: {}
            })
        default:
            return state;
    }
}