const Chat = {
    type: 'object',
    properties: {
        chat_id: {
            example: 'sbfhsdbv776dsf8v76',
            type: 'string',
        },
        room_id: {
            example: 'sbfhsdbv776dsf8v76',
            type: 'string',
        },
        content: {
            example: 'saya terkena cornache',
            type: 'string',
        },
        profil: {
            type: 'object',
            properties: {
                user_id: {
                    example: 'dsfdbshvbf8dsg8',
                    type: 'string',
                },
                username: {
                    example: 'rizal',
                    type: 'string',
                },
                avatar: {
                    example: 'asoija.jpg',
                    type: 'file',
                },
            }
        }

    },
};

// start body

const createChatBody = {
    type: 'object',
    properties: {
        room_id: {
            example: 'sbfhsdbv776dsf8v76',
            type: 'string',
        },
        content: {
            example: 'saya terkena cornache',
            type: 'string',
        },
        user_id: {
            example: 'dsfdbshvbf8dsg8',
            type: 'string',
        },


    },
};
// End Body

// ===================================================================================

// Start Exceptions

const InternalServer = {
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


// End Exceptions


// ===================================================================================

// Start Doc
const createChat = {
    tags: ['Chat'],
    description: 'Create chat on room',
    operationId: 'createChat',
    requestBody: {
        content: {
            'multipart/form-data': {
                schema: createChatBody
            },
        },
        required: true,
    },
    responses: {
        '200': {
            description: 'Successfully!',
            content: {
                'application/json': {
                    schema: Chat
                },
            },
        },
        '400': {
            description: 'Cannot Replied',
        },
        '500': InternalServer
    },
};

const getChat = {
    tags: ['Chat'],
    description: 'Get chat on room',
    operationId: 'getChat',
    security: [
        {
            bearerAuth: []
        }
    ],
    parameters: [
        {
            name: 'id',
            in: 'path',
            description: 'Room ID',
            required: true,
            type: 'string',
        },
        {
            in: 'query',
            name: 'page',
            description: 'Page number',
            schema: {
                type: 'integer'
            }
        }
    ],
    responses: {
        '200': {
            description: 'Get all chats on room',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        Chat
                    }
                },
            },
        },
        '401': {
            $ref: '#/components/responses/UnauthorizedError'
        },
        '500': InternalServer,
    },
};






// End Doc

module.exports = { Chat, createChat, getChat };

