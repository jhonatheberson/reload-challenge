<h1 align="center">
    <img alt="Ecoleta" title="#Ecoleta" src="./assets/banner.png" />
</h1>

<h1 align="center">
   🙂 <a href="#"> reload challenge </a>
</h1>

<h3 align="center">
    this is a challenge proposed by the reload company, for an evaluation process, for employment opportunities
</h3>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/jhonatheberson/reload-challenge?color=%2304D361">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/jhonatheberson/reload-challenge">

  <!-- <a href="https://www.twitter.com/jhonatheberson/">
    <img alt="Siga no Twitter" src="https://img.shields.io/twitter/url?url=https%3A%2F%2Fgithub.com%2Fjhonatheberson%2FREADME-ecoleta">
  </a> -->

  <a href="https://github.com/jhonatheberson/easy-church/releases">
        <img alt="GitHub release" src="https://raster.shields.io/github/v/release/jhonatheberson/template.svg">
  </a>
  <a href="https://github.com/jhonatheberson/reload-challenge/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/jhonatheberson/reload-challenge">
  </a>

   <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
   <a href="https://github.com/jhonatheberson/reload-challenge/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/jhonatheberson/reload-challenge?style=social">
  </a>

  <a href="https://github.com/jhonatheberson">
    <img alt="made by JhonatHeberson" src="https://img.shields.io/badge/made%20by-jhonatheberson-%237519C1">
  </a>

  <!-- <a href="https://blog.rocketseat.com.br/">
    <img alt="Stargazers" src="https://img.shields.io/badge/Blog-Rocketseat-%237159c1?style=flat&logo=ghost">
    </a>  -->
</p>

<h4 align="center">
	 <!-- Status: development -->
    Status: Finished
</h4>

<p align="center">
 <a href="#about">About</a> •
 <a href="#features">Features</a> •
 <a href="#layout">Layout</a> •
 <a href="#how-it-works">How it works</a> •
 <a href="#tech-stack">Tech Stack</a> •
 <a href="#contributors">Contributors</a> •
 <a href="#author">Author</a> •
 <a href="#user-content-license">License</a>

</p>

## About

this challenge was used pure [node.js](https://nodejs.org/en/) with [express](https://expressjs.com/pt-br/), and [Knex](https://knexjs.org/) for database connection, using migrations, seed. also performed using automation with [docker](https://www.docker.com/), and [docker-compose](https://docs.docker.com/compose/), to automate, relational database [mysql](https://www.mysql.com/), memory database [redis](https://redis.io/) and propria api.

---

## Features

- [x] build a restful, five-route API:

  - [x] get list of all companies.
  - [x] POST that receives a search term for a company, this search, needs to develop a search algorithm for each company term or contributor, or desktop.
  - [x] Get every desktop from every company
  - [x] Get all desktops from a company
  - [x] get all employees of a company


- [x] create a seed with knex from provided dataset
- [x] create a migration with knex from the data model
- [x] define the redis database and make sure the data does not expire.  **in this requirement, as a computer engineer, I find it unnecessary to use the redis database for authentication, so I implemented it in another way, thus performing treadoff, to use Redis, for more relevant processes such as managing queues and jobs**
- [x] using docker, create a docker-compose to structure the databases (MySQL and Redis) and leave the IP / ports bound in the application
- [x] use environment variables in an .env (leave the .env.example as a clone with data)


## PLUS:

- [x] creation of routes and controller, for user table related to company
- [x] authentication with JWT, securely and efficiently without using Redis. *obs: it expires in 7 days, but I can leave it to never sneeze as requested*

---

## Layout

<!-- The application layout is available on Figma:

<a href="https://www.figma.com/file/1SxgOMojOB2zYT0Mdk28lB/Ecoleta?node-id=136%3A546">
  <img alt="Made by jhonatheberson" src="https://img.shields.io/badge/Acessar%20Layout%20-Figma-%2304D361">
</a> -->

<!-- ### Mobile

<p align="center">
  <img alt="Ecoleta" title="#Ecoleta" src="./assets/home-mobile.png" width="200px">

  <img alt="Ecoleta" title="#Ecoleta" src="./assets/detalhes-mobile.svg" width="200px">
</p> -->

### Web

<p align="center" style="display: flex; align-items: flex-start; justify-content: center;">
  <img alt="Ecoleta" title="#Ecoleta" src="./assets/REQUISITOS.png" width="400px">

  <img alt="Ecoleta" title="#Ecoleta" src="./assets/REQUISITOS_2.png" width="400px">
</p>

---

## How it works

This project is divided into one parts:

1. Backend (server folder)
<!-- 2. Frontend (web folder)
3. Mobile (mobile folder) -->

<!-- Both Frontend and Mobile need the Backend to be running to work. -->

### Pre-requisites

Before you begin, you will need to have the following tools installed on your machine:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).
In addition, it is good to have an editor to work with the code like [VSCode](https://code.visualstudio.com/)

#### Rodando o Backend (servidor)

```bash

# Clone this repository
$ git clone git@github.com:jhonatheberson/reload-challenge.git

# Access the project folder cmd/terminal
$ cd reload-challenge

# run docker-compose
$ docker-compose up

# perform the migrations
$ knex migrate:latest

# run the seeds
$ knex seed:run


# I tried to run the api also inside the docker, but there is some conflict on the network, it is confused when trying to connect to the database

#if this also occurs, on your machine, just execute a stop in the container only from the API

#run api in terminal
$ yarn dev


# The server will start at port: 3333 - go to http://localhost:3333

```

<img alt="Ecoleta" title="#API_RUN" src="./assets/api_run.png" width="600px">
</p>

### perceba que o não estou conseguindo rodar api direto no docker, ele está dando problema de conexão confusa, deve ser alguma porta, algo do tipo relacionado a rede, como já mencionei acima.

## mas se para o container da api, e rodar *yarn dev* no terminal irá funcionar perfeitamente, como já mencionado acima.

<img alt="Ecoleta" title="#API_RUN" src="./assets/docker.png" width="600px">
</p>

<p align="center">
  <a href="https://github.com/jhonatheberson/reload-challenge/blob/master/Insomnia_API.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>

<!-- #### Running the web application (Frontend)

```bash

# Clone this repository
$ git clone git@github.com: jhonatheberson / README-ecoleta.git

# Access the project folder in your terminal
$ cd README-ecoleta

# Go to the Front End application folder
$ cd web

# Install the dependencies
$ npm install

# Run the application in development mode
$ npm run start

# The application will open on the port: 3000 - go to http://localhost:3000

``` -->

---

## Tech Stack

The following tools were used in the construction of the project:

<!-- #### **Website** ([React](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/))

- **[React Router Dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)**
- **[React Icons](https://react-icons.github.io/react-icons/)**
- **[Axios](https://github.com/axios/axios)**
- **[Leaflet](https://react-leaflet.js.org/en/)**
- **[React Leaflet](https://react-leaflet.js.org/)**
- **[React Dropzone](https://github.com/react-dropzone/react-dropzone)**

> See the file [package.json](https://github.com/jhonatheberson/README-ecoleta/blob/master/web/package.json) -->

#### [](https://github.com/jhonatheberson/Ecoleta#server-nodejs--typescript)**Server** ([NodeJS](https://nodejs.org/en/)
<!-- + [TypeScript](https://www.typescriptlang.org/) -->
)

- **[Express](https://expressjs.com/)**
- **[CORS](https://expressjs.com/en/resources/middleware/cors.html)**
- **[KnexJS](http://knexjs.org/)**
<!-- - **[SQLite](https://github.com/mapbox/node-sqlite3)**
- **[ts-node](https://github.com/TypeStrong/ts-node)** -->
- **[dotENV](https://github.com/motdotla/dotenv)**
- **[Multer](https://github.com/expressjs/multer)**
<!-- - **[Celebrate](https://github.com/arb/celebrate)**
- **[Joi](https://github.com/hapijs/joi)** -->

> See the file [package.json](https://github.com/jhonatheberson/reload-challenge/blob/master/server/package.json)

<!-- #### [](https://github.com/jhonatheberson/Ecoleta#mobile-react-native--typescript)**Mobile** ([React Native](http://www.reactnative.com/) + [TypeScript](https://www.typescriptlang.org/))

- **[Expo](https://expo.io/)**
- **[Expo Google Fonts](https://github.com/expo/google-fonts)**
- **[React Navigation](https://reactnavigation.org/)**
- **[React Native Maps](https://github.com/react-native-community/react-native-maps)**
- **[Expo Constants](https://docs.expo.io/versions/latest/sdk/constants/)**
- **[React Native SVG](https://github.com/react-native-community/react-native-svg)**
- **[Axios](https://github.com/axios/axios)**
- **[Expo Location](https://docs.expo.io/versions/latest/sdk/location/)**
- **[Expo Mail Composer](https://docs.expo.io/versions/latest/sdk/mail-composer/)**

> See the file [package.json](https://github.com/jhonatheberson/README-ecoleta/blob/master/mobile/package.json) -->

#### [](https://github.com/jhonatheberson/Ecoleta#utilit%C3%A1rios)**Utilitários**

- Prototype: **[Figma](https://www.figma.com/)** → **[Protótipo (Ecoleta)](https://www.figma.com/file/1SxgOMojOB2zYT0Mdk28lB/Ecoleta)**
<!-- - API: **[IBGE API](https://servicodados.ibge.gov.br/api/docs/localidades?versao=1)** → **[API de UFs](https://servicodados.ibge.gov.br/api/docs/localidades?versao=1#api-UFs-estadosGet)**, **[API de Municípios](https://servicodados.ibge.gov.br/api/docs/localidades?versao=1#api-Municipios-estadosUFMunicipiosGet)** -->
<!-- - Maps: **[Leaflet](https://react-leaflet.js.org/en/)** -->
- Editor: **[Visual Studio Code](https://code.visualstudio.com/)**
<!-- → Extensions: **[SQLite](https://marketplace.visualstudio.com/items?itemName=alexcvzz.vscode-sqlite)** -->
- Markdown: **[StackEdit](https://stackedit.io/)**, **[Markdown Emoji](https://gist.github.com/rxaviers/7360908)**
- Commit Conventional: **[Commitlint](https://github.com/conventional-changelog/commitlint)**
- API Test: **[Insomnia](https://insomnia.rest/)**
<!-- - Icons: **[Feather Icons](https://feathericons.com/)**, **[Font Awesome](https://fontawesome.com/)**
- Fonts: **[Ubuntu](https://fonts.google.com/specimen/Ubuntu)**, **[Roboto](https://fonts.google.com/specimen/Roboto)** -->

---

## Contributors

A big thanks to this group that made this product leave the field of idea and enter the app stores :)

You are an awesome team! :)

<!--
<table>
  <tr>
    <td align="center"><a href="https://rocketseat.com.br"><img style="border-radius: 50%;" src="https://avatars2.githubusercontent.com/u/2254731?s=400&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4" width="100px;" alt=""/><br /><sub><b>Diego Fernandes</b></sub></a><br /><a href="https://rocketseat.com.br/" title="Rocketseat"></a></td>
    <td align="center"><a href="https://rocketseat.com.br"><img style="border-radius: 50%;" src="https://avatars1.githubusercontent.com/u/4669899?s=460&u=806503605676192b5d0c363e4490e13d8127ed64&v=4" width="100px;" alt=""/><br /><sub><b>Cleiton Souza</b></sub></a><br /><a href="https://rocketseat.com.br/" title="Rocketseat"></a></td>
    <td align="center"><a href="https://rocketseat.com.br"><img style="border-radius: 50%;" src="https://avatars2.githubusercontent.com/u/861751?s=460&v=4" width="100px;" alt=""/><br /><sub><b>Robson Marques</b></sub></a><br /><a href="https://rocketseat.com.br/" title="Rocketseat"></a></td>
    <td align="center"><a href="https://rocketseat.com.br"><img style="border-radius: 50%;" src="https://avatars3.githubusercontent.com/u/16831337?s=460&v=4" width="100px;" alt=""/><br /><sub><b>Claudio Orlandi</b></sub></a><br /><a href="https://rocketseat.com.br/" title="Rocketseat"></a></td>
    <td align="center"><a href="https://rocketseat.com.br"><img style="border-radius: 50%;" src="https://avatars2.githubusercontent.com/u/37725197?s=460&u=446439436524c37f66e41f35b607dbb70358d5e4&v=4" width="100px;" alt=""/><br /><sub><b>Vinícios Fraga</b></sub></a><br /><a href="https://rocketseat.com.br/" title="Rocketseat"></a></td>
    <td align="center"><a href="https://rocketseat.com.br"><img style="border-radius: 50%;" src="https://avatars3.githubusercontent.com/u/26551306?s=460&u=18446655ccae6c2a29eb177a104ecf32f029aa3a&v=4" width="100px;" alt=""/><br /><sub><b>Hugo Duarte</b></sub></a><br /><a href="https://rocketseat.com.br/" title="Rocketseat"></a>  <a href="https://blog.rocketseat.com.br/" title="Blog">🌐</a></td>

  </tr>
  <tr>
    <td align="center"><a href="https://rocketseat.com.br"><img style="border-radius: 50%;" src="https://avatars0.githubusercontent.com/u/39345247?s=460&u=cdff2624a327a43e2765112a54e966a06eac6d79&v=4" width="100px;" alt=""/><br /><sub><b>Joseph Oliveira</b></sub></a><br /><a href="https://rocketseat.com.br/" title="Rocketseat"></a></td>
    <td align="center"><a href="https://rocketseat.com.br"><img style="border-radius: 50%;" src="https://avatars0.githubusercontent.com/u/10366880?s=460&u=59e93e1752e9d2ece4b7d8e129d60caba9c94207&v=4" width="100px;" alt=""/><br /><sub><b>Guilherme Rodz</b></sub></a><br /><a href="https://rocketseat.com.br/" title="Rocketseat"></a></td>
    <td align="center"><a href="https://rocketseat.com.br"><img style="border-radius: 50%;" src="https://avatars2.githubusercontent.com/u/6643122?s=460&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4" width="100px;" alt=""/><br /><sub><b>Mayk Brito</b></sub></a><br /><a href="https://rocketseat.com.br/" title="Rocketseat"></a></td>
    <td align="center"><a href="https://rocketseat.com.br"><img style="border-radius: 50%;" src="https://avatars2.githubusercontent.com/u/7268910?s=460&u=0b5d9df4232e70fa66ea9f130fad4260378323de&v=4" width="100px;" alt=""/><br /><sub><b>João Paulo</b></sub></a><br /><a href="https://rocketseat.com.br/" title="Rocketseat"></a></td>
    <td align="center"><a href="https://rocketseat.com.br"><img style="border-radius: 50%;" src="https://avatars2.githubusercontent.com/u/14251143?s=460&u=340ed1d854bbacc22b9a3210a18a1f589a28bc40&v=4" width="100px;" alt=""/><br /><sub><b>Luke Morales</b></sub></a><br /><a href="https://rocketseat.com.br/" title="Rocketseat"></a></td>
     <td align="center"><a href="https://rocketseat.com.br"><img style="border-radius: 50%;" src="https://avatars0.githubusercontent.com/u/5151405?s=460&u=1dbcf0e89087c2dc902d3331b90e532db1543d2b&v=4" width="100px;" alt=""/><br /><sub><b>Luiz Batanero</b></sub></a><br /><a href="https://rocketseat.com.br/" title="Rocketseat"></a></td>

  </tr>
</table> -->

## How to contribute

1. Fork the project.
2. Create a new branch with your changes: `git checkout -b my-feature`
3. Save your changes and create a commit message telling you what you did: `git commit -m" feature: My new feature "`
4. Submit your changes: `git push origin my-feature`
   > If you have any questions check this [guide on how to contribute](./CONTRIBUTING.md)

---

## Author

<a href="https://github.com/jhonatheberson">
 <img style="border-radius: 50%;" src="https://avatars3.githubusercontent.com/u/42505240?s=460&u=20d12ba68e5b22a99167d26cb85d28815599d08c&v=4" width="100px;" alt="Jhonat Heberson"/>
 <br />
 <sub><b>Jhonat Heberson</b></sub></a> <a href="https://github.com/jhonatheberson" title="Github"></a>
 <br />

<!-- [![Twitter Badge](https://img.shields.io/badge/-@jhonatheberson-1ca0f1?style=flat-square&labelColor=1ca0f1&logo=twitter&logoColor=white&link=https://twitter.com/jhonatheberson)](https://twitter.com/jhonatheberson)  -->

[![Linkedin Badge](https://img.shields.io/badge/-Jhonat-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/jhonat-heberson-64816616a/)](https://www.linkedin.com/in/jhonat-heberson-64816616a/)
[![Gmail Badge](https://img.shields.io/badge/-jhonatheberson@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:jhonatheberson@gmail.com)](mailto:jhonatheberson@gmail.com)

---

## License

This project is under the license [MIT](./LICENSE).

---
