export enum loginTypes {
    IS_USER_LOGIN = 'IS_USER_LOGIN'
}

export interface ILoginState {
    isUserLogin: boolean | null;
}

interface isUserLogin {
    type: loginTypes.IS_USER_LOGIN;
    payload: boolean;
}

export type isUserLoginActions = isUserLogin;