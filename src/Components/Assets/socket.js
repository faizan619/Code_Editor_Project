// import {io} from 'socket.io-client';
// import { env } from 'node:process';

// export const initSocket = async ()=>{
//     const options={
//         'force new connection':true,
//         reconnectionAttempt:'Infinity',
//         timeout:10000,
//         transports:['websocket'],
//     };
//     return io(env.REACT_APP_BACKEND_URL,options);
// }