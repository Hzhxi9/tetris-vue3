import { io } from 'socket.io-client';

let socket;

export function initMessage() {
    socket = io('http://localhost:3002');
    socket.on('connect', () => {
        console.log('θΏζ₯ζε')
    })
}

export const message = {
    emit(...args) {
        return socket.emit(...args)
    },
    on(...args) {
        return socket.on(...args)
    }
}