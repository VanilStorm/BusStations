import {ILoginState, isUserLoginActions, loginTypes} from "../../types/login/types";

const initialState: ILoginState = {
    isUserLogin: null,
}

export const loginReducer = (state = initialState, action: isUserLoginActions): ILoginState => {
    switch (action.type) {

        case loginTypes.IS_USER_LOGIN: {
            return {...state, isUserLogin: action.payload}
        }

        default: {
            return state;
        }
    }
}