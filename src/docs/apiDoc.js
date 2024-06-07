// import { createUser, createUserBody } from './users.ts'

const { createChat, getChat, Chat } = require('./chats');
const { predictImage, historyPredict, Predict, History } = require('./predict');


const {
    createUser,
    createUserBody,
    loginUser,
    loginUserBody,
    updateProfile,
    updateProfileBody,
    getUser,
    Users,
} = require("./users");
const {
    createRoom,
    getAllRoom,
    getAllRoomById,
    updateRoom,
    deleteRoom,
} = require("./rooms");




const apiDocumentation = {
    openapi: '3.0.1',
    info: {
      version: '1.3.0',
      title: 'Cornache API - Documentation',
      description: 'Description of my API here',
      termsOfService: 'https://mysite.com/terms',
      contact: {
        name: 'Developer name',
        email: 'dev@example.com',
        url: 'https://devwebsite.com',
      },
      license: {
        name: 'Apache 2.0',
        url: 'https://www.apache.org/licenses/LICENSE-2.0.html',
      },
    },
    servers: [
        {
            url: 'http://localhost:8080',
            description: 'Local Server',
        },
        {
            url: "https://cornache-api-model-umbv3jp3oa-et.a.run.app",
            description: 'Predict image',
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
        '/profile/{user_id}': {
            get: getUser,
            put: updateProfile,
            // post: login,
        },
        '/chat': {
            post: createChat
        },
        '/chat/{room_id}': {
            get: getChat
        },
        '/predict': {
            post: predictImage
        },
        '/history/{user_id}': {
            get: historyPredict
        },
        '/room': {
            post: createRoom,
            get: getAllRoom
        },
        "/room/{room_id}": {
            get: getAllRoomById,
            put: updateRoom,
            delete: deleteRoom,
          },

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
            Users,
            Chat,
            Predict,
            History,
        },
        responses: {
            UnauthorizedError: {
                description: 'Access token is missing or invalid',
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: {
                                error: {
                                    type: 'boolean',
                                    example: 'true'
                                },
                                message: {
                                    type: 'string',
                                    example: 'Access token is missing or invalid'
                                },
                            },
                        },
                    },
                },
            },
            NotFound: {
                description: 'User not found',
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: {
                                error: {
                                    type: 'boolean',
                                    example: 'true'
                                },
                                message: {
                                    type: 'string',
                                    example: 'User not found'
                                },
                            },
                        },
                    },
                },
            },
            InternalServer: {
                description: 'Server Error!',
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: {
                                error: {
                                    type: 'boolean',
                                    example: 'true'
                                },
                                message: {
                                    type: 'string',
                                    example: 'Internal Server Error!'
                                },
                            },
                        },
                    },
                },
            }
        },

        tags: [
            {
                name: "User",
            },
            {
                name: "Room",
            },
            {
                name: "Chat",
            },
            {
                name: "Predict",
            },
            {
                name: "History",
            },
        ],
        paths: {
            "/register": {
                post: createUser,
                // post: login,
            },
            "/login": {
                post: loginUser,
                // post: login,
            },
            "/profile/{id}": {
                get: getUser,
                put: updateProfile,
                // post: login,
            },
            "/room": {
                post: createRoom,
                get: getAllRoom,
            },
            "/room/{room_id}": {
                get: getAllRoomById,
                put: updateRoom,
                delete: deleteRoom,
            },
            "/chat": {
                post: createChat,
            },
            "/chat/{id}": {
                get: getChat,
            },
        },
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT",
                },
            },
            schemas: {
                Chat,
            },
            responses: {
                UnauthorizedError: {
                    description: "Access token is missing or invalid",
                },
            },
        },
    }
  };
  
//   export { apiDocumentation };

module.exports = { apiDocumentation };
