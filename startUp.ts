import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';

import DataBase from './src/infra/db';
import NewsController from './src/controller/newsController';
import Auth from './src/infra/auth';
import uploads from './src/infra/uploads';

class startUp {
  public app: express.Application;
  private _db: DataBase;
  private bodyParser;

  constructor() {
    this.app = express();

    this._db = new DataBase();
    this._db.createConection();

    this.middler();

    this.routes();
  }

  enableCors() {
    const options: cors.CorsOptions = {
      methods: 'GET, OPTIONS, PUT, POST, DELETE',
      origin: '*',
    };

    this.app.use(cors(options));
  }

  middler() {
    this.enableCors();
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  routes() {
    this.app.route('/').get((req, res) => {
      res.send({ versao: 'Api na V1' });
    });

    this.app.use(Auth.validate);
    this.app.route('/uploads').post(uploads.single('file'), (req, res) => {
      try {
        res.send('Arquivo enviado com sucesso');
      } catch (err) {
        console.log(err);
      }
    });

    this.app.route('/api/v1/news').get(NewsController.get);
    this.app.route('/api/v1/news/:id').get(NewsController.getById);
    this.app.route('/api/v1/news/').post(NewsController.create);
    this.app.route('/api/v1/news/:id').put(NewsController.update);
    this.app.route('/api/v1/news/:id').delete(NewsController.delete);
  }
}

export default new startUp();

// {
// 	"hat":"Ano de 2018 ficará marcado pelo sucesso dos atletas nacionais no Circuito Mundial de Surfe",
// 	"title":"Com título de Medina e 11 na elite, 'Brazilian Storm' mostra que veio para ficar",
// 	"text":"A tempestade brasileira no surfe mostrou que não é passageira e representa a consolidação da modalidade no País. 'Brazilian Storm' é como os surfistas do Brasil são chamados no circuito. O ano de 2018 ficará marcado pelo sucesso dos atletas nacionais em diversas parte do mundo e tudo isso gera expectativa para 2019 e 2020, quando o surfe estreará no programa olímpico dos Jogos de Tóquio Gabriel Medina conquistou seu bicampeonato mundial no mesmo dia que Jesse Mendes ganhou a Tríplice Coroa Havaiana, uma honraria para os surfistas. Das 11 etapas realizadas no Circuito, os atletas brasileiros ganharam nove - nas últimas cinco temporadas três títulos do Mundial da elite ficaram nas mãos de surfistas brasileiros.",
// 	"author":"Da Redação, com Estadão Conteúdo",
// 	"img":"http://imagem.com.br/f_446243.jpg",
// 	"link":"https://esporte.uol.com.br/noticia/100000944120/com-bi-de-medina-e-11-na-elite-brazilian-storm-veio-para-ficar.html",
// 	"active":true
// }
