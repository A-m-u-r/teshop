 export interface IUser {
    email: string;
    id: any;
    password: string;
    is_superuser?: boolean;
    isActivated?: boolean;
    role?: string;
    work_place?: number;
    token?: any
 }