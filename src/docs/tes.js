const apiDocumentation = {
    openapi: "3.0.0",
    info: {
        version: "1.3.0",
        title: "CORNACHE API - Documentation",
        description: "Description of my API here",
        // termsOfService: 'https://mysite.com/terms',
        contact: {
            name: "Cloud Computing",
            email: "bangkit@academy.com",
            url: "https://cornache.com",
        },
        servers: [
            {
                url: 'http://localhost:8000',
                description: 'Local Server',
            },
            {
                url: "https://cornache-api-model-umbv3jp3oa-et.a.run.app",
                description: 'Predict image',
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
            '/profile/{user_id}': {
                get: getUser,
                put: updateProfile,
                // post: login,
            },
            '/chat': {
                post: createChat
            },
            '/chat/{user_id}': {
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
                get: createRoom
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
            // license: {
            //     name: 'Apache 2.0',
            //     url: 'https://www.apache.org/licenses/LICENSE-2.0.html',

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
    }
}