<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

## Intro
Project created from the following recipe: https://docs.nestjs.com/recipes/prisma#prisma


## Change log
List of npm packages after creating the project via Nest cli `nest new hello-prisma`:
├── @nestjs/cli@8.2.5
├── @nestjs/common@8.4.4
├── @nestjs/core@8.4.4
├── @nestjs/platform-express@8.4.4
├── @nestjs/schematics@8.0.10
├── @nestjs/testing@8.4.4
├── @types/express@4.17.13
├── @types/jest@27.4.1
├── @types/node@16.11.27
├── @types/supertest@2.0.12
├── @typescript-eslint/eslint-plugin@5.20.0
├── @typescript-eslint/parser@5.20.0
├── eslint-config-prettier@8.5.0
├── eslint-plugin-prettier@4.0.0
├── eslint@8.13.0
├── jest@27.5.1
├── prettier@2.6.2
├── reflect-metadata@0.1.13
├── rimraf@3.0.2
├── rxjs@7.5.5
├── source-map-support@0.5.21
├── supertest@6.2.2
├── ts-jest@27.1.4
├── ts-loader@9.2.8
├── ts-node@10.7.0
├── tsconfig-paths@3.14.1
└── typescript@4.6.3

Installed prisma as dev dependency via `npm install prisma --save-dev`

Executed `npx prisma init`
✔ Your Prisma schema was created at prisma/schema.prisma
  You can now open it in your favorite editor.

warn You already have a .gitignore. Don't forget to exclude .env to not commit any secret.

Next steps:
1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started
2. Set the provider of the datasource block in schema.prisma to match your database: postgresql, mysql, sqlite, sqlserver or mongodb.
3. Run prisma db pull to turn your database schema into a Prisma schema.
4. Run prisma generate to generate the Prisma Client. You can then start querying your database.

More information in our documentation:
https://pris.ly/d/getting-started

Configurar bases de datos
Crear bases de datos por medio de ejecución de scripts 
* create-resource-group.sh
* create-azure-sql-datatabase-server.sh
* create-main-db.sh
* create-shadow-db.sh
* create-azure-sql-database-firewall-rule.sh

[schema.prisma]
Configurar urls de bases de datos
Crear modelos

Ejecutar script de sincronización de la base de datos
`npx prisma migrate dev --name init`

[prisma.service.ts]
Implementando servicio para abstraer el API Prisma Client para las consultas de datos
Instanciar PrismaClient, establecer conexión a base de datos
`onModuleInit` es opcional
`onModuleDestroy` no implementado, ya que Prisma cuenta con hooks para destruir la conexión.
Consultar issues with [enableShutdownHooks](https://docs.nestjs.com/recipes/prisma#issues-with-enableshutdownhooks)

[user.service.ts]
Implementando consultas CRUD.

[post.service.ts]
Implementando consultas CRUD.

[user.controller.ts]
Implementación de controlador de usuarios
Archivo generado vía `nest generate --flat controller user`

[post.controller.ts]
Implementación de controlador de posts
Archivo generado vía `nest generate --flat controller post`

Integración con Azure Functions
[Procedimiento](https://trilon.io/blog/deploy-nestjs-azure-function)

Instalar CLI de NestJS
`npm i -g @nestjs/cli`
✔ Package installation in progress... ☕
Starting library setup...
CREATE .funcignore (66 bytes)
CREATE host.json (23 bytes)
CREATE local.settings.json (116 bytes)
CREATE proxies.json (72 bytes)
CREATE main/function.json (294 bytes)
CREATE main/index.ts (287 bytes)
CREATE main/sample.dat (23 bytes)
CREATE src/main.azure.ts (321 bytes)
UPDATE package.json (2193 bytes)
✔ Packages installed successfully.



Añadir los esquemáticos de Azure Functions
`nest add @nestjs/azure-func-http`

Crear Azure FunctionApp
FunctionApp creada por medio de extensión de VS Code

[schema.prisma]
Añadir generator client/binary target "windows"

Añadir entidad Drum
[schema.prisma]
Añadir modelo Drum
Ejecutar script de migración
`npx prisma migrate dev --name Drum`










