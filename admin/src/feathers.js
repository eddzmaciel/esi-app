import io from "socket.io-client";
import feathers from "@feathersjs/client";

const host = process.env.REACT_APP_URL_FEATHERS;
const socket = io(host);
//set-up feathersclient
const app = feathers();
//socket
app.configure(feathers.socketio(socket));
app.configure(feathers.authentication());

// console.log("host REACT_APP_URL_FEATHERS-->", host);
// console.log("app.configure-->", app.configure);
//console.log("socket-->", socket);

export default app;
