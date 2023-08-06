import { IAuth } from "./auth.interface";

export interface User extends IAuth {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    role: "Admin" | "User";
    active: boolean;
}