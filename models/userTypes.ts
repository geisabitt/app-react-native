export enum Types {
    ADMIN = 'admin',
    SELLER = 'seller',
    CLIENT = 'client',
}
export interface UserTypes {
    id?: string;
    name: string;
    email: string;
    password: string;
    type: Types;
}