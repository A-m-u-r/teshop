import {IUser} from "@/models/IUser";
import {IToken} from "@/models/response/IToken";

export interface RegResponse {
    user: IUser;
    token: IToken
}

