import { Customer } from "../interfaces/customer.interface";

import CustomerModel from "../models/customer";

const createCustomerService = async (customer: Customer) => {
    const newCustomer = await CustomerModel.create(customer);
    return newCustomer;
}


const getCustomersService = async () => {

    const customers = await CustomerModel.find({});
    return customers;
}
const getCustomerService = async (id: string) => {


    const customer = await CustomerModel.findOne({ _id: id });
    console.log("customer: ", customer);
    return customer;
}

const updateCustomerService = async (id: string, customer: Customer) => {
    const updatedCustomer = await CustomerModel.findOneAndUpdate({ _id: id }, customer, { new: true });
    if (!updatedCustomer) {
        return "Customer no Exists"
    }
    const status = 'success';

    return { status, data: updatedCustomer };
}


const deleteCustomerService = async (id: string) => {
    const deletedCustomer = await CustomerModel.remove({ _id: id });
    const status = 'success';
    return { status, id, data: deletedCustomer };
}


export {
    createCustomerService,
    getCustomersService,
    getCustomerService,
    updateCustomerService,
    deleteCustomerService
};