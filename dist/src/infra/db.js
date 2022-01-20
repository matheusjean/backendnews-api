"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
class DataBase {
    constructor() {
        this.DB_URL = 'mongodb://localhost:27017/db_portal';
    }
    // private DB_URL = 'mongodb+srv://matheusjean:teti10grboy@cluster0.rsmpx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    // private DB_URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.rsmpx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
    createConection() {
        mongoose.connect(this.DB_URL);
    }
}
exports.default = DataBase;
