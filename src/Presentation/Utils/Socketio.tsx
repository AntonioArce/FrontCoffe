import io from 'socket.io-client'

const socket = io('http://192.168.1.73:3000/orders/carga')
export default socket