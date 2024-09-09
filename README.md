# Spell IT 🤓

Documentation for Spell It! open source app 

## What is Spell IT?

Spell It is an app that allows students to study for tests through the active recall method. The tests that our program niches to is spelling exams or spelling "bees" We do this through a Web Speech API (MDN) which blurts words out for a user to spell in a input.

## API Routes

| Route                         | Methods                   | Description                                      |
|-------------------------------|---------------------------|--------------------------------------------------|
| `/api/create`                 | DELETE, GET, POST         | Handles creation and management of resources.    |
| `/api/auth/[...nextauth]`    | Various (see NextAuth)    | Contains all auth routes provided by NextAuth.  Excludes `/api/auth/signin` and `/api/auth/signout`, which redirect to signin and signout respectively. |

## Client Routes

| Route           | Description                       |
|-----------------|-----------------------------------|
| `/create-post`  | Page for creating new posts.     |
| `/`             | Home page of the application.     |
| `/signin`       | Sign-in page for users.          |
| `/signout`      | Sign-out page for users.         |
