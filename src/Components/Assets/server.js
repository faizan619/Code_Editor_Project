// // const express = require('express')
// // const http = require('http')
// // const {Server} = require('socket.io');
// // import envPORT from '.env.PORT';

// import { defineConfig } from 'vite';
// import { dotenv } from 'dotenv';
// dotenv.config();

// export default defineConfig({
//     define: {
//       PORT: `"${process.env.PORT}"` // wrapping in "" since it's a string
//     },
//     //....
//   }
// )
// import express  from 'express';
// const app = express();
// import http from 'http'
// import { Server } from 'socket.io'

// const server = http.createServer(app);
// const io = new Server(server);

// io.on('connection',(socket)=>{
//     console.log('socket connected',socket.id);
// })

// const PORT = envPORT;
// server.listen(PORT,()=>{
//     console.log(`listening on port ${PORT}`);
// }) 