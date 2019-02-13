# Typescript and Nodejs starter project

## Dependancies
### OSX
``
$ brew install npm
``

## before starting
``
$ npm install
``

## Starting
```
$ npm start
```

## Develop
```
$ npm run dev
```

## Build docker image
```
$ npm run docker-build
```
## Push docker image
Environmental variables must be set
``
export $ACR_REGISTRY="registry_name"
$ACR_USER="user_name"
$ACR_PASSWORD="password"
``


```
$ npm run docker-push
```

# Links
## intro tutorial
https://jonathanmh.com/typescript-node-js-tutorial-backend-beginner/
## nodemon
https://medium.com/aherforth/how-to-get-auto-restart-and-breakpoint-support-with-typescript-and-node-5af589dd8687
## Async /await
https://javascript.info/promise-basics