import { ACTION_CHANGE_EMAIL, ACTION_CHANGE_PASSWORD } from "./actions";

const initState = { email: "", password: "" };

const rootReducer = (state = initState, action) =>
{
    switch (action.type) {
        case ACTION_CHANGE_EMAIL: return { ...state, email: action.email };
        case ACTION_CHANGE_PASSWORD: return { ...state, password: action.password };
        default: return state;
    }
}

export default rootReducer;