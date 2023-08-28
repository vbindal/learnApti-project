# LearnApti-project

<b><li>A Secure Testing platform based on the Concept of Classrooms</b>
<b><li>my role is to do all the backend part in this project and all those backend files are in this Backend_Branch</b>
<b> For complete repo first switch to mainBranch and then perform these operations</b>


## Table of Contents 📕

- [About the Project](#about-the-project)
  - [Description](#description)
  - [Features](#features)
  - [Built With](#built-with)
  <!---* [Live App](#live-app)--->
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Contributing](#contributing)
- [Contact Us](#contact)

<!-- ABOUT THE PROJECT -->

## About The Project

<!-- <img src="image-in-readme.png" width="50%"> -->

### Description 👇

We provide an online testing platform that can be used to conduct tests that are wrapped with all the necessary precautions to reduce the chances of cheating. Here, the educator can create classes and tests on a web portal and all the entered questions will be randomly distributed among the students resulting in a large number of sets.

### Features 🔎

- A secure platform for online testing.
- Interactive and easy to use.
- Grades can be accessed or changed even after the completion of the test.
- The teacher can decide if a particular question is compulsory or not in all the tests.
- The application is in the locked mode, so there is no transition between other applications (such as Whatsapp, call, etc.).
- Basic facilities like calculators are provided in the application for basic math operations.
- A list of the marks will be sent to the educator just after the completion of the test.
- Use Gmail or Student mail IDs to save the student's marks.
- The test will be automatically submitted after the prescribed time frame.
- We will try to block incoming calls/ messages/ screen capture or any other malpractice during the test.

### Built With 💻

- [ReactJs](https://reactjs.org/)
- [Expressjs](https://expressjs.com/)
- [Mongodb](https://www.mongodb.com/)
- [React-Redux]()
<!-- LIVE APP

## Live App

[Android App for students and teachers]() and [Web app for teachers to add and access classes and tests](https://manthan-app.herokuapp.com/)
-->

<!-- GETTING STARTED -->

## Technology Stack 🛠️

- **Coding Languages**: <img alt="JavaScript" src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/> <img alt="HTML5" src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"/> <img alt="CSS3" src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white"/>

- **Tools & Technologies**: <img alt="React" src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"/> <img alt="MongoDB" src ="https://img.shields.io/badge/MongoDB-%234ea94b.svg?&style=for-the-badge&logo=mongodb&logoColor=white"/> <img alt="Express.js" src="https://img.shields.io/badge/express.js%20-%23404d59.svg?&style=for-the-badge"/> <img alt="NodeJS" src="https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white"/>

- **Project Management Tools**: <img alt="GitHub" src="https://img.shields.io/badge/github%20-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white"/> <img alt="Git" src="https://img.shields.io/badge/git%20-%23F05033.svg?&style=for-the-badge&logo=git&logoColor=white"/>

## Getting Started ✅

To get a local copy up and running, follow these simple steps.

### Prerequisites 📖

These are the prerequisites required to run this application:

- Node
- npm
- mongo-uri

### Installation

1. Clone the Manthan repository form GitHub

```sh
  git clone https://github.com/itsrahulsehgal/learnApti-project
  cd learnApti-project
```
2. Create .env file in Manthan using format from [.env.example](./.env.example)
```sh
  MONGO_URI = //mongo-uri
  PORT = 5050
  JWT_SECRET = mysecret
```

3. To run the application in development server

```sh
  cd Frontend
  npm install
  cd ..
  npm install
  npm run dev
```

<!-- CONTRIBUTING -->

## Contributing 🖋

Contributions are what makes the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project.
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the Branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.
