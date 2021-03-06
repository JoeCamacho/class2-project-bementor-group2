# HackYourFutureBE Class 2 Project - BeMentor

BeMentor is a mentoring platform that aims to get and keep women in the information technology sector. It is being developed by students and the coordination team of HackYourFuture at BeCentral. BeCentral is a digital campus in the heart of Brussels, and will also be the physical meeting place to facilitate mentorships as a result of BeMentor.
The initial version of the platform will focus mostly on matchmaking and first steps towards in-person mentorships.


### Goals for the students
  - Learn to understand an existing codebase in a short period of time
  - Get experience working on existing projects
  - Get experience working on open-source projects
  - Get familiar with the basics of project management with agile
  - Become comfortable with reporting about your work and communicating within a team

You will also receive some CV and LinkedIn training to get ready for the Belgian job market.


## Getting started

This project will test your skill & knowledge on everything you've learned so far. It includes `React`, `Node` and `MongoDB`.

The application has the following structure:

`client`  
Folder for everything front-end related. Houses the React application.

`client/src/App.jsx`  
Application entrypoint with `react-router` definitions.

`client/src/api`  
One file per resource (e.g. module, path, user) that has `XHR`/`fetch` functions for retreiving and manipulating data from the API.

`client/src/assets/css`  
All of your styles, the methodology/flavouring/preprocessor you use, is all up to you.

`client/src/assets/images`  

`client/src/components`  
All of your components, group these up per page.



`server`  
Folder for everything back-end related. Houses a decoupled, Node API

`server/src/controller`  
`server/src/model`  
`server/src/route`  
Each of these folders have one file per resource.
