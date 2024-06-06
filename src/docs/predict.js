const predictImage = {
    tags: ["Predict"],
    summary: "Prediction image",
    operationId: 'predictImage',
    requestBody: {
        description: "Post New predict To Database",
        required: true,
        content: {
            "multipart/form-data": {
                schema: {
                    $ref: "#/components/schemas/Predict"
                }
            },
            "Access-Control-Allow-Origin": '*',
            'Access-Control-Allow-Methods': ["GET", "POST", "PUT", "DELETE"],
        }
    },
    responses: {
        '200': {
            description: "Berhasil memprediksi",
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
                                type: 'string',
                                example: 'Berhasl memprediksi gambar!'
                            },
                            predictions: {
                                $ref: "#/components/schemas/Predict"
                            }
                        }
                    }

                }
            },
        },
        '404': {
            $ref: "#/components/responses/NotFound"

        },
        '500': {
            $ref: "#/components/responses/InternalServer"

        },
    }
}
const historyPredict = {
    tags: ["History"],
    summary: "History of predictions",
    operationId: 'historyPredict',
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
            description: 'Get all history predicted',
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
                                example: 'Berhasil mengubah data!'
                            },
                            history: {
                                $ref: "#/components/schemas/History"
                            }
                        }
                    },
                },
            },
        },
        '401': {
            $ref: '#/components/responses/UnauthorizedError'
        },
        '500': {
            $ref: "#/components/responses/InternalServer"

        },
    },
}


const Predict = {
    type: "object",
    properties: {
        user_id: {
            type: "string",
            example: '342343jghghj5435-345hv43-bn3b4'

        },
        image_predict: {
            type: "string",
            format: "binary",
            example: "ava.jpg"
        }
    }
}
const History = {
    type: "object",
    properties: {
        user_id: {
            type: 'string',
            example: '342343jghghj5435-345hv43-bn3b4'
        },
        prediction: {
            type: 'object',
            properties: {
                image: { type: 'string', example: 'monyet.jpg' },
                name: { type: 'string', example: 'sakit jantung' },
                confidance_score: { type: 'float', example: '100' },
                created_at: { type: 'string', example: '2024-04-01' },
            }
        }

    }
}


module.exports = { predictImage, historyPredict, History, Predict }