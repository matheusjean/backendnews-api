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
const newsService_1 = require("../services/newsService");
const HttpStatus = require("http-status");
const helper_1 = require("../infra/helper");
class NewsController {
    get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield newsService_1.default.get()
                .then((news) => helper_1.default.sendResponse(res, HttpStatus.OK, news))
                .catch((error) => console.error.bind(console, `Error${error}`));
        });
    }
    getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const _id = req.params.id;
                let response = yield newsService_1.default.getById(_id);
                helper_1.default.sendResponse(res, HttpStatus.OK, response);
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let vm = req.body;
                yield newsService_1.default.create(vm);
                helper_1.default.sendResponse(res, HttpStatus.OK, 'Noticia cadastrada com sucesso!');
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const _id = req.params.id;
                let news = req.body;
                yield newsService_1.default.update(_id, news);
                helper_1.default.sendResponse(res, HttpStatus.OK, `Noticia atualiza com sucesso!`);
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const _id = req.params.id;
                yield newsService_1.default.delete(_id);
                helper_1.default.sendResponse(res, HttpStatus.OK, 'Noticia deletada com sucesso!');
            }
            catch (error) {
                console.error(error);
            }
        });
    }
}
exports.default = new NewsController();
