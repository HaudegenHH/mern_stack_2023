## verbose documented MERN Stack app, May 2023


MongoDB,
ExpressJS,
React,
NodeJS

Frontend will additionally consists of:
- MaterialUI for styling
- MaterialUI DataGrid for the tables
- Nivo for the charts
- Redux Toolkit for state management
- RTK Query - for making api calls

Backend will be using:
NodeJS as runtime
ExpressJS as the backend framework
and Mongoose for managing MongoDB

If not installed already:
Node,
NPX and  
Visual Studio Code as IDE

---

- mkdir "mern_stack_app", cd into that folder and with 

```sh
code .
```

..you open the project in VSCode 

- in VSCode open the terminal, mkdir "server" and cd into that folder

```sh
npm init -y
```

for initializing the npm project with default settings

- now install the following packages

```sh
npm i express body-parser cors dotenv helmet morgan mongoose  
```

and

```sh
npm i nodemon -D   
```

- body-parser (for parsing the data coming in)
- cors (for cross origin resource sharing)
- dotenv (for environment variables)
- helmet (for pretecting the apis)
- morgan (for logging the api calls)
- mongoose (as said for handling the mongodb calls) 
- nodemon (for live server reload saved as dev dependency)

---

### MongoDB connection

- go to:  mongodb.com
- sign in with google or github or with email
- create a project, "Build a database" for that project
- choose shared / the free tier and hit create
- choose "aws", "azure" or Google Cloud
- choose a server with is closest to you
- and change "cluster" to sth meaningful like "mernstack_app" 
- create cluster
- choose a username and password
- create user

- connect from: "Add my current ip address" (only that ip address has 
access to the database, or you add "0.0.0.0" the ip access list which 
means: access from everywhere)
- hit finish

- on the left side you could choose "Database Access" for adding new User that 
may need access to the database (or editing/deleting existing users, change 
their permission etc)

- or you hit "Network Access" for viewing, editing, adding the list of ip addresses
that have access to the db

- hit "Database", and click the "Connect" Button

- "connect your application" (with the cluster, using mongodb native drivers)

- copy the connection string and put it into: server/.env and should look like:
```sh
MONGO_CONN='mongodb+srv://username:password@clusterName.mongodb.net/?retryWrites=true&w=major'
PORT=5000
```

---

- in package.json add:

```sh
"type": "module", // which allows to use import statements
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js",
}
```
---

### Starting with the frontend...

- open a new terminal

- cd ..
out of the server folder and run:

```sh
npx create-react-app client
```

---

As helpful vscode extensions you could install

- ES7 + React/Redux/React-Native-Snippets
- Prettier for autoformatting the code
- Tailwind Shades (in contrast to bootstrap which i used last time)

---

create

'client/src/jsconfig.json'

{\
  "compilerOptions": { \
    "baseUrl": "src" \
  }, \
  "include": ["src"] \
} 

- that makes sure that we have absolute imports (paths) from the src directory

---

create

'client/src/theme.js'
- with the "Tailwind Shades" extension installed, you could...

#666666

...paste that into theme.js, mark it and press cmd+k, cmd+g (on mac)
or ctrl+k, ctrl+g

- ...and you will get an automatically generated number of shades based on this initial
color

---

### Google Fonts
- "Inter"
- 400,600,700 regular
- choose import, copy and paste to the top of the index.css

---



