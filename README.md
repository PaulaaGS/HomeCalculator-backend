# Home Calculator

### Navigation

- [About The Project](#about-the-project)
  - [Demo](#demo)
  - [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Installation](#installation)
- [Roadmap](#roadmap)
- [Contact](#contact)

<br>

# About The Project

Home Calculator is an application designed for people who likes planning their home budget during the renovation or finishing their home.

![Home Page](/images/readme-01.jpg)

The home page shows a summary of all expenses you will have to pay to finish your home and expenses already incurred.

You can display a list of expenses, add new expense, edit and delete.

![List of expenses](/images/readme-02.jpg)
![Expense form](/images/readme-03.jpg)
![Expense](/images/readme-04.jpg)

<br>

## Demo

Here is a short video to show how the app works:
[HomeCalculator-demo](https://youtu.be/bmuwpfreNy0)

<br>

## Tech Stack

- **TypeScript**
- **NestJS**
- **TypeORM**
- **MySQL**

<br>

# Getting Started

Here is the frontend repository of the application:  
[HomeCalculator-frontend](https://github.com/PaulaaGS/HomeCalculator-frontend)

## Installation

1. Clone the repository
   ```sh
   git clone https://https://github.com/PaulaaGS/HomeCalculator-backend.git
   ```
2. Go to the project directory
   ```sh
   cd HomeCalculator-backend
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Start the server development
   ```js
   npm start
   ```
5. Start the watch mode
   ```js
   npm run start:dev
   ```
6. Start the production mode
   ```js
   npm run start:prod
   ```

<br>

## Configuration

You may need to configure connection with your database in .env file:

```
   DATABASE_HOST

   DATABASE_PORT

   DATABASE_USERNAME

   DATABASE_PASSWORD

   DATABASE_NAME
```

<br>

# Roadmap

Next steps to develop the application:

- implement sorting rows in the table
- add browsing history and the ability to return to the previous page using the back arrow
- filtering (for example by order status)
- write tests
- responsive design
- accessibility
- add registration panel and logging page
- add posibility to change language for english and add other currencies and imperial units

<br>

# Contact

Paulina: paulina.a.gaweda@gmail.com
