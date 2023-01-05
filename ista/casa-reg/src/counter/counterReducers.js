// create the reducers
export function counterReducer(state = 4, action) {
    switch (action.type) {
        case "ADD":
            return state = state + 1
        case "REMOVE":
            return state = state - 1
        default:
            return state;
    }
}