import NewsService from '../services/newsService';
import * as HttpStatus from 'http-status';
import Helper from '../infra/helper';

class NewsController {
  async get(req, res) {
    await NewsService.get()
      .then((news) => Helper.sendResponse(res, HttpStatus.OK, news))
      .catch((error) => console.error.bind(console, `Error${error}`));
  }

  async getById(req, res) {
    try {
      const _id = req.params.id;
      let response = await NewsService.getById(_id);
      Helper.sendResponse(res, HttpStatus.OK, response);
    } catch (error) {
      console.error(error);
    }
  }

  async create(req, res) {
    try {
      let vm = req.body;
      await NewsService.create(vm);
      Helper.sendResponse(
        res,
        HttpStatus.OK,
        'Noticia cadastrada com sucesso!',
      );
    } catch (error) {
      console.error(error);
    }
  }

  async update(req, res) {
    try {
      const _id = req.params.id;
      let news = req.body;
      await NewsService.update(_id, news);
      Helper.sendResponse(res, HttpStatus.OK, `Noticia atualiza com sucesso!`);
    } catch (error) {
      console.error(error);
    }
  }

  async delete(req, res) {
    try {
      const _id = req.params.id;
      await NewsService.delete(_id);
      Helper.sendResponse(res, HttpStatus.OK, 'Noticia deletada com sucesso!');
    } catch (error) {
      console.error(error);
    }
  }
}

export default new NewsController();
