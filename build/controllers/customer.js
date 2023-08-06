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
Object.defineProperty(exports, "__esModule", { value: true });
exports.postCustomer = exports.deleteCustomer = exports.updateCustomer = exports.getCustomer = exports.getCustomers = void 0;
const customer_1 = require("../services/customer");
const error_handle_1 = require("../utils/error.handle");
const getCustomers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const responseCustomers = yield (0, customer_1.getCustomersService)();
        console.log("responseCustomers: ", responseCustomers);
        res.send(responseCustomers);
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, 'Error getting customers');
    }
});
exports.getCustomers = getCustomers;
const getCustomer = ({ params }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = params;
        const responseCustomer = yield (0, customer_1.getCustomerService)(id);
        const data = responseCustomer ? responseCustomer : { "message": "Customer not found" };
        res.send(data);
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, 'Error getting customer');
    }
});
exports.getCustomer = getCustomer;
const updateCustomer = ({ params, body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = params;
        const responseCustomer = yield (0, customer_1.updateCustomerService)(id, body);
        const data = responseCustomer ? responseCustomer : { "message": "Customer not found" };
        res.send(data);
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, 'Error updating customers');
    }
});
exports.updateCustomer = updateCustomer;
const deleteCustomer = ({ params }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = params;
        const responseCustomer = yield (0, customer_1.deleteCustomerService)(id);
        res.send(responseCustomer);
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, 'Error deleting customers');
    }
});
exports.deleteCustomer = deleteCustomer;
const postCustomer = ({ body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const responseCustomer = yield (0, customer_1.createCustomerService)(body);
        res.send(responseCustomer);
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, 'Error creating customers', e);
    }
});
exports.postCustomer = postCustomer;
