import {loginTypes} from "../../types/login/types";

export const loginAction = (is: boolean) => ({type: loginTypes.IS_USER_LOGIN, payload: is});