// start body

const createUserBody = {
    type: 'object',
    properties: {
        username: {
            type: 'string',
            example: 'John Snow',
        },
        password: {
            type: 'string',
            example: 'fdgw54w5y4ghh',
        },
        confirmPass: {
            type: 'string',
            example: 'fdgw54w5y4ghh',
        },

    },
};
const loginUserBody = {
    type: 'object',
    properties: {
        username: {
            type: 'string',
            example: 'John Snow',
        },
        password: {
            type: 'string',
            example: 'fdgw54w5y4ghh',
        },

    },
};
const updateProfileBody = {
    type: 'object',
    properties: {
        username: {
            type: 'string',
            example: 'John Snow',
        },
        avatar_image: {
            type: 'file',
            example: 'ava.jpg',
        },

    },
}

// End body

// ===================================================================

// Start Exeception
const TooLarge = {
    description: 'Too Large Image!',
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
                        example: 'Please use image profile under 1 MB!'
                    },
                },
            },
        },
    },
}
const notMatch = {
    description: 'Password not matching',
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
                        example: 'Password not mathcing'
                    },
                },
            },
        },
    },
}

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
const registerFailed = {
    description: 'Register failed',
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
                        example: 'Lengkapi semua form!'
                    },
                },
            },
        },
    },
}

// End Exeception


// =========================================================================

// start Doc
const createUser = {
    tags: ['User'],
    summary: 'Create new user',
    description: 'Register for new user',
    operationId: 'createUser',
    requestBody: {
        content: {
            'multipart/form-data': {
                schema: createUserBody
            },
        },
        required: true,
    },
    responses: {
        '200': {
            description: 'Successfully!',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            error: {
                                type: 'boolean',
                                example: 'false'
                            },
                            message: {
                                example: 'Berhasil register, silahkan login'
                            },
                            user: {
                                example: {
                                    user_id: {
                                        type: 'string',
                                        example: '60564fcb544047cdc3844818',
                                    },
                                    username: {
                                        type: 'string',
                                        example: 'John Snow',
                                    },
                                    password: {
                                        type: 'string',
                                        example: 'Afdsf4teg',
                                    },

                                },

                            },
                        },
                    },
                },
            },
        },
        '400': registerFailed,
        '422': notMatch,
        '500': InternalServer
    },
};
const loginUser = {
    tags: ['User'],
    summary: 'Login user',
    description: 'Create a new user in the system',
    operationId: 'loginUser',
    requestBody: {
        content: {
            'multipart/form-data': {
                schema: loginUserBody
            },
        },
        required: true,
    },
    responses: {
        '200': {
            description: 'Login successfully!',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            error: {
                                type: 'boolean',
                                example: true
                            },
                            message: {
                                type: 'string',
                                example: 'Berhasil login!'
                            },
                            user: {
                                type: 'object',
                                properties: {
                                    user_id: {
                                        type: 'string',
                                        example: '60564fcb544047cdc3844818',
                                    },
                                    username: {
                                        type: 'string',
                                        example: 'John Snow',
                                    },
                                    token: {
                                        type: 'string',
                                        example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFmdGVybWVyZ2luZyIsImlhdCI6MTcxNzU3Njk2NCwiZXhwIjoxNzE3NjYzMzY0fQ.6bYI3EoAcfRywdwtdXT0wdV2Fcc7sZXwWHtXjYamZsw',
                                    },
                                }
                            }
                        },
                    },
                },
            },
        },
        '404': {
            description: 'Login Failed',
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
                                example: 'User tidak ditemukan, harap register terlebih dahulu!'
                            },
                        },
                    },
                },
            },
        },
        '500': InternalServer
    },
};


const getUser = {
    tags: ['User'],
    summary: 'Get user by ID',
    description: 'Get user by ID',
    operationId: 'getUser',
    security: [
        {
            bearerAuth: []
        }
    ],
    parameters: [
        {
            name: 'user_id',
            in: 'path',
            description: 'User ID',
            required: true,
            type: 'string',
        },
    ],
    responses: {
        '200': {
            description: 'Get profile',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            error: {
                                type: 'boolean',
                                example: true
                            },
                            message: {
                                example: 'Berhasil mengubah data!'
                            },
                            user: {
                                type: 'object',
                                properties: {
                                    user_id: {
                                        type: 'string',
                                        example: '60564fcb544047cdc3844818',
                                    },
                                    username: {
                                        type: 'string',
                                        example: 'John Snow',
                                    },
                                    avatar_image: {
                                        type: 'string',
                                        example: 'ava.jpg',
                                    },
                                }

                            },
                        },
                    },
                },
            },
        },
        '500': InternalServer
    },
};
const updateProfile = {
    tags: ['User'],
    summary: 'Edit profile',
    description: 'Edit user profile',
    operationId: 'updateProfile',
    parameters: [
        {
            name: 'user_id',
            in: 'path',
            description: 'User ID',
            required: true,
            type: 'string',
        },
    ],
    requestBody: {
        content: {
            'multipart/form-data': {
                schema: updateProfileBody
            },
        },
        required: true,
    },
    responses: {
        '200': {
            description: 'Profile Updated!',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            error: {
                                example: 'true'
                            },
                            message: {
                                example: 'Berhasil mengubah data!'
                            },
                            user: {
                                type: 'object',
                                properties: {
                                    user_id: {
                                        type: 'string',
                                        example: '60564fcb544047cdc3844818',
                                    },
                                    username: {
                                        type: 'string',
                                        example: 'John Snow',
                                    },
                                    avatar_image: {
                                        type: 'string',
                                        example: 'ava.jpg',
                                    },
                                }
                            },
                        },
                    },
                },
            },
        },
        '415': TooLarge,
        '500': InternalServer,
    },
}


// End Doc




const Users = {
    type: 'object',
    properties: {
        username: {
            type: 'string',
            example: 'John Snow',
        },
        password: {
            type: 'string',
            example: '32932hd9hndw',
        },
        avatar_image: {
            type: 'file',
            example: 'ava.jpg',
        },

    },
};

module.exports = { createUser, createUserBody, loginUser, loginUserBody, updateProfile, updateProfileBody, getUser, Users };