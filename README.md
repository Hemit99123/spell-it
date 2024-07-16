# README FILE

Documentation for Spell It! open source app 

## API Routes

| Route                         | Methods                   | Description                                      |
|-------------------------------|---------------------------|--------------------------------------------------|
| `/api/create`                 | DELETE, GET, POST         | Handles creation and management of resources.    |
| `/api/auth/[...nextauth]`    | Various (see NextAuth)    | Contains all auth routes provided by NextAuth.   |
|                               |                           | Excludes `/api/auth/signin` and `/api/auth/signout`, which redirect to signin and signout respectively. |

## Client Routes

| Route           | Description                       |
|-----------------|-----------------------------------|
| `/create-post`  | Page for creating new posts.     |
| `/`             | Home page of the application.     |
| `/signin`       | Sign-in page for users.          |
| `/signout`      | Sign-out page for users.         |
