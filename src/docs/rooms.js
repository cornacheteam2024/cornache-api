// start body

const getAllRoomBody = {
  type: "object",
  properties: {
    error: {
      type: "boolean",
      example: false,
    },
    message: {
      type: "string",
      example: "Berhasil mendapatkan Ruangan Diskusi berdasarkan room_id",
    },
    room: {
      type: "object",
      properties: {
        user_id: {
          type: "string",
          example: "7241e946-4c8b-417c-a746-07bac6832143",
        },
        username: {
          type: "string",
          example: "Faisal",
        },
        detail_room: {
          type: "object",
          properties: {
            room_id: {
              type: "string",
              example: "11d28a68-e471-41f3-9811-8e61361730a4",
            },
            image: {
              type: "string",
              example:
                "https://storage.googleapis.com/cornache-bucket/room-image/1717094238174-scissors.png",
            },
            name: {
              type: "string",
              example: "Gray Leaf",
            },
            description: {
              type: "string",
              example:
                "Bercak daun jagung berwarna abu-abu adalah gejala penyakit tanaman yang disebabkan oleh infeksi jamur",
            },
            update_at: {
              type: "integer",
              example: "1717094238655",
            },
            created_at: {
              type: "integer",
              example: "171709423865532",
            },
          },
        },
      },
    },
  },
};

const createRoomBody = {
  type: "object",
  properties: {
    error: {
      type: "boolean",
      example: false,
    },
    message: {
      type: "string",
      example: "Berhasil membuat Room Diskusi",
    },
    room: {
      type: "object",
      properties: {
        user_id: {
          type: "string",
          example: "7241e946-4c8b-417c-a746-07bac6832143",
        },
        username: {
          type: "string",
          example: "Faisal",
        },
        detail_room: {
          type: "object",
          properties: {
            room_id: {
              type: "string",
              example: "11d28a68-e471-41f3-9811-8e61361730a4",
            },
            image: {
              type: "string",
              example:
                "https://storage.googleapis.com/cornache-bucket/room-image/1717094238174-scissors.png",
            },
            name: {
              type: "string",
              example: "Gray Leaf",
            },
            description: {
              type: "string",
              example:
                "Bercak daun jagung berwarna abu-abu adalah gejala penyakit tanaman yang disebabkan oleh infeksi jamur",
            },
            update_at: {
              type: "integer",
              example: "1717094239876",
            },
            created_at: {
              type: "integer",
              example: "171709423861237",
            },
          },
        },
      },
    },
  },
};

const updateRoomBody = {
  type: "object",
  properties: {
    error: {
      type: "boolean",
      example: false,
    },
    message: {
      type: "string",
      example: "Berhasil mengedit Room Diskusi",
    },
    room: {
      type: "object",
      properties: {
        user_id: {
          type: "string",
          example: "7241e946-4c8b-417c-a746-07bac6832143",
        },
        username: {
          type: "string",
          example: "Faisal Update",
        },
        detail_room: {
          type: "object",
          properties: {
            room_id: {
              type: "string",
              example: "11d28a68-e471-41f3-9811-8e61361730a4",
            },
            image: {
              type: "string",
              example:
                "https://storage.googleapis.com/cornache-bucket/room-image/1717094238174-scissors.png",
            },
            name: {
              type: "string",
              example: "Gray Leaf Update",
            },
            description: {
              type: "string",
              example:
                "Update Bercak daun jagung berwarna abu-abu adalah gejala penyakit tanaman yang disebabkan oleh infeksi jamur",
            },
            update_at: {
              type: "integer",
              example: "1717094239876",
            },
            created_at: {
              type: "integer",
              example: "171709423861237",
            },
          },
        },
      },
    },
  },
};

const deleteRoomBody = {
  type: "object",
  properties: {
    error: {
      type: "boolean",
      example: false,
    },
    message: {
      type: "string",
      example: "Berhasil menghapus Ruangan Diskusi",
    },
  },
};

// End body

// ===================================================================

// Start Exeception
const TooLarge = {
  description: "Too Large Image!",
  content: {
    "application/json": {
      schema: {
        type: "object",
        properties: {
          error: {
            type: "boolean",
            example: true,
          },
          message: {
            type: "string",
            example: "Please use image profile under 1 MB!",
          },
        },
      },
    },
  },
};

const errorUserNotFound = {
  type: "object",
  properties: {
    error: {
      type: "boolean",
      example: true,
    },
    message: {
      type: "string",
      example: "User tidak ditemukan",
    },
  },
};

const errorRoomNotFound = {
  type: "object",
  properties: {
    error: {
      type: "boolean",
      example: true,
    },
    message: {
      type: "string",
      example: "Ruangan Diskusi tidak ditemukan",
    },
  },
};

const errorCreateAllRoom = {
  type: "object",
  properties: {
    error: {
      type: "boolean",
      example: true,
    },
    message: {
      type: "string",
      example: "Gagal membuat Room Diskusi",
    },
  },
};

const errorGetAllRoom = {
  type: "object",
  properties: {
    error: {
      type: "boolean",
      example: true,
    },
    message: {
      type: "string",
      example: "Gagal mendapatkan semua Ruangan Diskusi",
    },
  },
};

const errorGetRoomById = {
  type: "object",
  properties: {
    error: {
      type: "boolean",
      example: true,
    },
    message: {
      type: "string",
      example: "Gagal mendapatkan Ruangan Diskusi berdasarkan room_id",
    },
  },
};

const errorUpdateRoom = {
  type: "object",
  properties: {
    error: {
      type: "boolean",
      example: true,
    },
    message: {
      type: "string",
      example: "Gagal mengedit Room Diskusi",
    },
  },
};

const errorDeleteRoom = {
  type: "object",
  properties: {
    error: {
      type: "boolean",
      example: true,
    },
    message: {
      type: "string",
      example: "Gagal menghapus Ruangan Diskusi",
    },
  },
};

// End Exeception

// =========================================================================

// start Doc
const getAllRoom = {
  tags: ["Room"],
  description: "Get All Room for Discussion",
  operationId: "getAllRoom",
  security: [
    {
      bearerAuth: [],
    },
  ],
  responses: {
    200: {
      description: "Berhasil membuat Room Diskusi",
      content: {
        "application/json": {
          schema: getAllRoomBody,
        },
      },
    },
    500: {
      description: "Gagal membuat Room Diskusi",
      content: {
        "application/json": {
          schema: errorGetAllRoom,
        },
      },
    },
  },
};

const getAllRoomById = {
  tags: ["Room"],
  description: "Get Room for Discussion By Id",
  operationId: "getAllRoomById",
  security: [
    {
      bearerAuth: [],
    },
  ],
  parameters: [
    {
      name: "room_id",
      in: "path",
      description: "Room Id",
      required: true,
      type: "string",
    },
  ],
  responses: {
    200: {
      description: "Berhasil mendapatkan Ruangan Diskusi berdasarkan room_id",
      content: {
        "application/json": {
          schema: getAllRoomBody,
        },
      },
    },
    500: {
      description: "Gagal mendapatkan Ruangan Diskusi berdasarkan room_id",
      content: {
        "application/json": {
          schema: errorGetRoomById,
        },
      },
    },
  },
};

const createRoom = {
  tags: ["Room"],
  description: "Create Room for Discussion",
  operationId: "createRoom",
  requestBody: {
    content: {
      "multipart/form-data": {
        schema: createRoomBody,
      },
    },
    required: true,
  },
  responses: {
    200: {
      description: "Berhasil membuat Room Diskusi",
      content: {
        "application/json": {
          schema: createRoomBody,
        },
      },
    },
    500: {
      description: "Gagal membuat Room Diskusi",
      content: {
        "application/json": {
          schema: errorCreateAllRoom,
        },
      },
    },
    404: {
      description: "User tidak ditemukan",
      content: {
        "application/json": {
          schema: errorUserNotFound,
        },
      },
    },
  },
};

const updateRoom = {
  tags: ["Room"],
  description: "Update Room for Discussion",
  operationId: "updateRoom",
  requestBody: {
    content: {
      "multipart/form-data": {
        schema: createRoomBody,
      },
    },
    required: true,
  },
  parameters: [
    {
      name: "room_id",
      in: "path",
      description: "Room Id",
      required: true,
      type: "string",
    },
  ],
  responses: {
    200: {
      description: "Berhasil membuat Room Diskusi",
      content: {
        "application/json": {
          schema: updateRoomBody,
        },
      },
    },
    500: {
      description: "Gagal membuat Room Diskusi",
      content: {
        "application/json": {
          schema: errorUpdateRoom,
        },
      },
    },
  },
};

const deleteRoom = {
  tags: ["Room"],
  description: "Delete Room for Discussion",
  operationId: "deleteRoom",
  parameters: [
    {
      name: "room_id",
      in: "path",
      description: "Room Id",
      required: true,
      type: "string",
    },
  ],
  responses: {
    200: {
      description: "Berhasil menghapus Ruangan Diskusi",
      content: {
        "application/json": {
          schema: deleteRoomBody,
        },
      },
    },
    500: {
      description: "Gagal menghapus Ruangan Diskusi",
      content: {
        "application/json": {
          schema: errorDeleteRoom,
        },
      },
    },
    404: {
      description: "Ruangan Diskusi tidak ditemukan",
      content: {
        "application/json": {
          schema: errorRoomNotFound,
        },
      },
    },
  },
};

module.exports = {
  createRoom,
  getAllRoom,
  getAllRoomById,
  updateRoom,
  deleteRoom,
};
