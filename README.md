# Google Drive Upload Center using OAuth (SSD - Assignment 2)

"Google Drive Upload Center" is an application which can be used as a thrid party in the process of uploading filed to Google Drives. The application is based in OAuth authentication protocol which is very useful in granting premission to access Google accounts without accessing passwords.

### Installation

Google Drive Upload Center requires [Node.js](https://nodejs.org/) v4+ to run.

First, download the source code from Github
Then, install the dependencies and devDependencies and start the server.

```sh
$ cd oauthapp
$ npm install
```

### Build and Deploy for Testings

The application requires nodemon to build and deploy. If there is no nodemon with you, install nodemon using below command.

```sh
$ cd oauthapp
$ npm install -g nodemon
```

After successfully install nodemon type below command to execute the application

```sh
$ nodemon
```

If the build is successful, the terminal will display following message

![TerminalResult](https://user-images.githubusercontent.com/40816466/95243075-ba796300-082d-11eb-8d40-d4a048af8ead.JPG)

After above message appears in terminal, type http://localhost:5000/ on the browser. Now you can view the below start page of the application in the browser!!

![home page](https://user-images.githubusercontent.com/40816466/95243751-b568e380-082e-11eb-928a-4e40bac499c3.png)

Happy Building!!

### Todos

- Do MORE Tests
