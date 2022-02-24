# desafio-pro-franchising
<h1 align="center">Desafio pro-Franchising</h1>

<h1 align="center">  
<a href="https://imgbb.com/"><img src="https://i.ibb.co/MBCtPcf/pro-Franshising.png" alt="pro-Franshising" border="0" width="300px"></a></h1>

<p align="center">Este desafio consiste em criar uma API de gerenciamento de loja e seu respectivo estoque.</p>



# Sumário

- [Construção do desafio](#construção-do-desafio)
- [Tecnologias envolvidas](#tecnologias-envolvidas)
- [Requisitos do desafio](#requisitos-do-desafio)
- [Requisitos desenvolvidos](#requisitos-desenvolvidos)
- [Demonstração](#demonstracao)
- [Referencias](#referencias)
- [Instalação e uso](#instalação-e-uso)

---

# Construção do desafio

Construi uma aplicação para uma cafeteria que precisava resolver seu problema de controle de produtos no estoque de sua loja, para isso optei por construir uma API com arquitetura MSC e utilizando o banco de dados MongoDB, para o gerenciamento dos produtos e seus respectivos ingredientes;

---

# Tecnologias envolvidas:
[NodeJs](https://nodejs.org/pt-br/docs/)

[Express](https://expressjs.com/pt-br/)

[MongoDB](https://mongodb.com/)

[dotenv](https://www.npmjs.com/package/dotenv)

[jwt](https://www.npmjs.com/package/jsonwebtoken)

[bcrypt](https://www.npmjs.com/package/bcrypt)

[multer](https://www.npmjs.com/package/multer)

[joi](https://www.npmjs.com/package/joi)

---

# Requisitos do desafio:

Observações técnicas:
- Validar todos os campos para ninguem quebrar a loja
- Login precisa ser criptografado a senha
- Documentar para entendimento do código. (comentar algumas coisas explicando)
- Tratar erros corretamente (404 para não encontrado), (200 | 202 para OK), etc

Requisitos:
- Utilizar NodeJS como backend
- Validar as rotas utilizando JWT ou Oauth2
- Salvar em um banco de dados as informações

Diferenciais:
- Banco de dados MongoDB
- Utilizar NestJS
- Utilizar TypeScript
- Upload de imagens (deixar somente PNG e JPG)
---

# Requisitos desenvolvidos:

- [x] Validar todos os campos para ninguem quebrar a loja
- [x] Login precisa ser criptografado a senha
- [x] Documentar para entendimento do código. (comentar algumas coisas explicando)
- [x] Tratar erros corretamente (404 para não encontrado), (200 | 202 para OK), etc
- [x] Utilizar NodeJS como backend
- [x] Validar as rotas utilizando JWT ou Oauth2
- [x] Salvar em um banco de dados as informações

---

# Instalação e uso

Para executar o projeto sua máquina deve satisfazer os requisitos abaixo.  
  
Pré-requisitos  
  
  
 - node v14.17.0  
 - npm 6.14.13  
 - git version 2.25.1  
 - mongodb ^4.4.0
  

 
[Download node js](https://nodejs.org/en/)  
  
[Download git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)  
  

### Clonando o projeto  
  
Abra o terminal de sua máquina

> Caso queira use um dos atalhos abaixo de acordo com o seu sistema
> operacional
>  - Linux: Ctrl+Alt+T
>  - MacOS: COMMAND + ESPAÇO
>  - Windows: Tecla do Windows + R

e digite o comando abaixo para clonar o projeto.  
  
  
git clone git@github.com:FredericoCanoeira/desafio-pro-franchising.git
   
 
  
### Configurando a variável de ambiente

crie um arquivo .env e coloque os valores de acordo com a configuração do seu banco de dados
  
  
PORT= Esc
olha o numero da porta que você deseja
HOST= localhost
DB_NAME= Insira o nome que você deseja para o banco de dados
SECRET= Escolha uma palavra qualquer para essa variável de ambiente



Entre na pasta  
  
  
cd desafio-pro-franchising
  

 
  
### Instalando as dependências  
  
  
npm install  
   

### Executando o projeto  
  
  
npm start  
ou
npm run dev
