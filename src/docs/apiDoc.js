// import { createUser, createUserBody } from './users.ts'

const { createChat, getChat,Chat } = require('./chats');
const { createUser, createUserBody, loginUser, loginUserBody, updateProfile, updateProfileBody, getUser, Users } = require('./users')


const apiDocumentation = {
    openapi: '3.1.0',
    info: {
        version: '1.0.0',
        title: 'CORNACHE API - Documentation',
        description: 'Description of my API here',
        // termsOfService: 'https://mysite.com/terms',
        contact: {
            name: 'Cloud Computing',
            email: 'bangkit@academy.com',
            url: 'https://cornache.com',
        },
        // license: {
        //     name: 'Apache 2.0',
        //     url: 'https://www.apache.org/licenses/LICENSE-2.0.html',
        // },
    },
    servers: [
        {
            url: 'http://localhost:8000',
            description: 'Local Server',
        },
        {
            url: 'https://api.mysite.com',
            description: 'Production Server',
        },
    ],
    tags: [
        {
            name: 'User',
        },
        {
            name: 'Room',
        },
        {
            name: 'Chat',
        },
        {
            name: 'Predict',
        },
        {
            name: 'History',
        },
    ],
    paths: {
        '/register': {
            post: createUser,
            // post: login,
        },
        '/login': {
            post: loginUser,
            // post: login,
        },
        '/profile/{id}': {
            get: getUser,
            put: updateProfile,
            // post: login,
        },
        '/chat': {
            post: createChat
        },
        '/chat/{id}': {
            get: getChat
        }

    },
    components: {
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
            },
        },
        schemas: {
            Chat

        },
        responses: {
            UnauthorizedError: {
                description: 'Access token is missing or invalid'
            }
        },
    },

};

module.exports = { apiDocumentation }