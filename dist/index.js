"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const Server_1 = require("./server/Server");
Server_1.server.listen(process.env.PORT ?? 3333, () => {
    console.log(`Server is running on port ${process.env.PORT ?? 3333} in ${process.env.NODE_ENV} mode`);
});
