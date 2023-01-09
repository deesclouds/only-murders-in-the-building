# Only Murders In The Building

A fun CRUD app for learning how CRUD behaves based on keeping track of a list of quotes from the true crime podcast from the mystery-comedy show .... Only Murders in The Building!

<p align="center" width="800" height="600"><img src="https://user-images.githubusercontent.com/77818241/197258743-79020074-855f-43c3-9d6f-b625166799a1.gif" alt="only-murders-in-the-building"/></p> 

## What is CRUD?

What is Express?
A framework for building web applications on top of Node.js

MongoDB?
Is a database where we store information for our sites and applications.

CRUD?
Set of operations we get our servers to execute:

Create - (Post) - Make something
Read - (Get) - Get something
Update - (Put) - Change something
Destroy - (Delete) - Remove something

Post, Get, Put, Delete - requests lets us construct REST APIs.

This is how crud works:
We make requests from our Browser that passes data to our Server, that then passes data to our Database, then our Database responds with data back to our Server, which then our CRUD app lives between our Server and Browser where we can then see that data within out Browser. 

If that doesn't make enough sense right now that's ok. This diagram from zellwk.com can help clarify things: 

<img src="crud-diagram.png" alt="image of crud">

## Technologies Used:
Html
Css - Grid
JavaScript
Ejs
Node.js
Nodemon
Express
MongoDB
Body Parser - which is deprecated and needs to be updated within the codebase.

## Setup:

Check if Node is installed:

Within your terminal run:

```
node -v
```
If node is not installed download through the [Node](https://nodejs.org/en/) site, or through a package manager: [Homebrew](https://brew.sh/)Mac and [Chocolatey](https://chocolatey.org/) Windows.

## Getting Started:
```
npm init -y
```

The flag -y let's us pass through all the prompts to get started quickly.

### Running Node:
```
touch server.js
```

create our server.js file, then place a console.log with a statement that lets us know that Node is working. 

run ```node server.js``` to display our statement. 

### Running Express:
```
npm install express --save
```

The flag --save has express to save as a dependency within our package.json file. 
Then within 