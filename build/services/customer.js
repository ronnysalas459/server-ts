"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCustomerService = exports.updateCustomerService = exports.getCustomerService = exports.getCustomersService = exports.createCustomerService = void 0;
const customer_1 = __importDefault(require("../models/customer"));
const createCustomerService = (customer) => __awaiter(void 0, void 0, void 0, function* () {
    const newCustomer = yield customer_1.default.create(customer);
    return newCustomer;
});
exports.createCustomerService = createCustomerService;
const getCustomersService = () => __awaiter(void 0, void 0, void 0, function* () {
    const customers = yield customer_1.default.find({});
    return customers;
});
exports.getCustomersService = getCustomersService;
const getCustomerService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const customer = yield customer_1.default.findOne({ _id: id });
    console.log("customer: ", customer);
    return customer;
});
exports.getCustomerService = getCustomerService;
const updateCustomerService = (id, customer) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedCustomer = yield customer_1.default.findOneAndUpdate({ _id: id }, customer, { new: true });
    if (!updatedCustomer) {
        return "Customer no Exists";
    }
    const status = 'success';
    return { status, data: updatedCustomer };
});
exports.updateCustomerService = updateCustomerService;
const deleteCustomerService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedCustomer = yield customer_1.default.remove({ _id: id });
    const status = 'success';
    return { status, id, data: deletedCustomer };
});
exports.deleteCustomerService = deleteCustomerService;
