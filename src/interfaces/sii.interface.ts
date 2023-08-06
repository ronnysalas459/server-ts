import { IAuth } from "./auth.interface";

export interface Sii extends IAuth {
    cliente: string;
    periodoRut: string;
    folio: string;
    montoDeuda: number;
    montoIu: number;
    periodo:string,
    rut:string,
}