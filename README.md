# TDD: Understanding and Practicing in a Node and TypeScript Backend

Project developed during the Quality Assurance (QA) Experience Bootcamp under the guidance of specialist [Nathally Souza](https://github.com/nathsouzadev/ "Nathally Souza").

TypeScript (TS) has grown significantly in recent years, with more and more companies adopting it as a standard for projects historically dominated by JavaScript (JS). TS is already a major trend in both frontend (React and Angular) and backend (Node.js) technologies. Explore this incredible tool and focus on the quality of your solutions using Test-Driven Development (TDD) in this exclusive, brand-new content!

## Architecture

### 📂Controllers

> Applies necessary request validations.

### 📂Services

> Applies business rules before sending data to the repository.

### 📂Repositories

> Saves data to the database.

### 📂Entities

> Manages the application's entity structures.

### 📂Database

> Establishes necessary database connections.

### 📂__mocks_

> Stores data and mocks used in unit tests.

### 📂tests

> Stores integration test suites.

```markdown

 📁 Project
   |
   |-  📁 src
   |    |
   |    |- 📁 __mocks_
   |         |- 📄 database.test.sqlite
   |         |- 📄 getEntityManagerMock.ts
   |         |- 📄 getMockPost.ts
   |         |- 📄 mockConnection.ts
   |         |- 📄 mockContentList.ts
   |         |- 📄 mockRequest.ts
   |         |- 📄 mockResponse.ts
   |
   |    |- 📁 controllers
   |         |- 📄 DeletePostController.test.ts
   |         |- 📄 DeletePostController.ts
   |         |- 📄 GetAllPostController.test.ts
   |         |- 📄 GetAllPostController.ts
   |         |- 📄 GetUserPostsController.test.ts
   |         |- 📄 GetUserPostsController.ts
   |         |- 📄 MessageController.test.ts
   |         |- 📄 MessageController.ts
   |         |- 📄 SavePostController.test.ts
   |         |- 📄 SavePostController.ts
   |
   |    |- 📁 database
   |         |- 📁 migrations
   |         | -1642549851159-Posts.ts
   |         |- 📄 database.sqlite
   |         |- 📄 database.test.sqlite
   |         |- 📄 index.ts
   |
   |    |- 📁 entities
   |         |- 📄 Post.ts
   |
   |    |- 📁 repositories
   |         |- 📄 PostRepository.test.ts
   |         |- 📄 PostRepository.ts
   |
   |    |- 📁 services
   |         |- 📄 DeletePostService.test.ts
   |         |- 📄 DeletePostService.ts
   |         |- 📄 GetAllPostService.test.ts
   |         |- 📄 GetAllPostService.ts
   |         |- 📄 GetUserPostsService.test.ts
   |         |- 📄 GetUserPostsService.ts
   |         |- 📄 SavePostService.test.ts
   |         |- 📄 SavePostService.ts
   |
   |    |- 📄 app.ts
   |    |- 📄 index.ts
   |    |- 📄 router.ts
   |    |- 📄 swagger.json
   |
   |
   |- 📁 tests
   |    |- 📄 posts.test.ts
   |
   |
   |- 📄 .eslintignore
   |- 📄 .eslintrc.json
   |- 📄 .gitignore
   |- 📄 jest.config.js
   |- 📄 LICENSE
   |- 📄 ormconfig.js
   |- 📄 package-lock.json
   |- 📄 package.json
   |- 📄 README.md
   |- 📄 tsconfig.json

```

### This project uses

- Node
- Typescript
- Jest
- SQLite
- TypeORM

### How to run the project

1 - Clone the repository

2 - Install all dependencies

```bash
    yarn install
```

3 - Access the main route

<http://localhost:5000/v1/>

### Testing the project

#### Unit tests

```bash
    yarn test:unit
```

#### Integration tests

1 - Run the application in development mode

```bash
    yarn run dev
```

1 - Run the integration tests in the /tests repository.

```bash
    yarn test:integration
```

### endpoints

**_GET_** /posts

Returns all posts created in the database.

#### Example I

```bash
    http://localhost:5000/v1/posts
```

**_POST_** /posts (in development)

Creates a new post in the database. All fields are required.

#### Example II

```bash
    body {
        author: 'author@email.com',
        content: 'Example tweet'
    }
```

## Suggested challenges

- Using TDD concepts

[ ] Implement a route that returns all of a user's posts

[ ] Implement a route that allows deleting a post

### Happy hacking

See [original repository](https://github.com/nathsouzadev/twidio).

[LICENSE](/LICENSE)
