
# Cornache API

## Overview
This repository is a documentation of the development api to build the backend side. this project was developed by the learning path cloud computing from the capstone project team "CORNACHE". The technology we use to develop this project is google cloud platform, nodejs, express. framework, and for the database using firestore.  


## Languages and Tools:
<p align="left"> 
  <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> 
  <a href="https://expressjs.com" target="_blank" rel="noreferrer"> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" alt="express" width="40" height="40"/> 
  <a href="https://firebase.google.com/" target="_blank" rel="noreferrer"> <img src="https://cdn.cdnlogo.com/logos/f/45/firestore.svg" alt="firebase" width="40" height="40"/> </a> 
  <a href="https://cloud.google.com/run" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/github/explore/0cc935fda057a2a7573c3c304217eb251ddb3c1e/topics/cloud-run/cloud-run.png" alt="cloudrun" width="40" height="40"/> </a> 
  <a href="https://github.com/cornacheteam2024/cornache-api/actions" target="_blank" rel="noreferrer"> <img src="https://icon.icepanel.io/Technology/svg/GitHub-Actions.svg" alt="githubaction" width="40" height="40"/> </a> 
  <a href="https://www.docker.com/" target="_blank" rel="noreferrer"> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" alt="docker" width="50" height="50"/> </a> 
</p>

## Cloud Services
  <a href="https://cloud.google.com" target="_blank" rel="noreferrer"> 
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original-wordmark.svg" alt="gcp" width="200" height="200"/> </a> 

These are several services from Google Cloud Platform that we integrate in this project :

- Cloud Run : Deploying API feature 
- Cloud Storage : Store image, there are 3 folders in this bucket, namely predicted-image, room-image, and user-profile.
- Cloud firestore : Database service 

## Documentation

Swagger.io for API Endpoint Documentation

```bash
  https://cornache-api-umbv3jp3oa-et.a.run.app/docs
```


## Intallation for local environment

Before you install this project to your local environment you should install Cloud SDK and then configure ADC.

```bash
gcloud auth application-default login
```

Clone the project

```bash
  git clone https://github.com/cornacheteam2024/cornache-api.git
```

Go to the project directory

```bash
  cd cornache-api
```

Install dependencies

```bash
  npm install
```
Create .env for environment variable

```bash
  nano .env
```
Adding this code in .env file

```bash
  JWT_KEY = xxxxxxxx
  PORT = 8080
```

Start the server

```bash
  npm run start
```



## Authors

- [@FaisalHilmi](https://github.com/FaishalHilmi)
- [@rizalalif](https://www.github.com/rizalalif)
