import { Request, Response } from "express";
import {
    createCustomerService,
    getCustomersService,
    getCustomerService,
    updateCustomerService,
    deleteCustomerService
} from "../services/customer";
import { handleHttp } from "../utils/error.handle"

const getCustomers = async (req: Request, res: Response) => {
    try {
        const responseCustomers = await getCustomersService();
        console.log("responseCustomers: ", responseCustomers);
        res.send(responseCustomers);

    } catch (e) {
        handleHttp(res, 'Error getting customers');
    }
}

const getCustomer = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params;
        const responseCustomer = await getCustomerService(id);
        const data = responseCustomer ? responseCustomer : { "message": "Customer not found" };
        res.send(data);
    } catch (e) {
        handleHttp(res, 'Error getting customer');
    }
}

const updateCustomer = async ({ params, body }: Request, res: Response) => {

    try {
        const { id } = params;
        const responseCustomer = await updateCustomerService(id, body);

        const data = responseCustomer ? responseCustomer : { "message": "Customer not found" };
        res.send(data);
    } catch (e) {
        handleHttp(res, 'Error updating customers');
    }
}

const deleteCustomer = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params;
        const responseCustomer = await deleteCustomerService(id);
        res.send(responseCustomer);
    } catch (e) {
        handleHttp(res, 'Error deleting customers');
    }
}

const postCustomer = async ({ body }: Request, res: Response) => {
    try {
        const responseCustomer = await createCustomerService(body);
        res.send(responseCustomer);
    } catch (e) {
        handleHttp(res, 'Error creating customers', e);
    }
}

export { getCustomers, getCustomer, updateCustomer, deleteCustomer, postCustomer }
