import express from 'express'; // Importando a biblioteca express que é responsável por criar o servidor
import morgan from 'morgan'; // Importando a biblioteca morgan que é responsável por fazer o log das requisições
import routes from './routes.ts'; // Importando as rotas
import dotenv from 'dotenv'; // Importando a biblioteca dotenv para carregar variáveis de ambiente

dotenv.config(); // Carregando as variáveis de ambiente do arquivo .env
const app = express(); // Criando o servidor
const PORT = process.env.PORT || 3001; // Definindo a porta do servidor, pode utilizar process.env.PORT para definir a porta via variável de ambiente, caso não esteja definida, utiliza a porta 3001

app.use(morgan('dev')); // Utilizando a biblioteca morgan para fazer o log das requisições
app.use(express.json()); // Utilizando a biblioteca express para converter as requisições em JSON

app.use('/', routes); // Utilizando as rotas

app.listen(PORT, () => { // Iniciando o servidor
  console.log(`Server is running at http://localhost:${PORT}`); // Mostrando a porta do servidor
});
