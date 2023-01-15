import { mongodbPassword } from "../passwords.js";
import mongoose from "mongoose"


mongoose.connect(`mongodb+srv://BERTOLASSI:${mongodbPassword}@node.ql25wui.mongodb.net/NODE`);
//mongoose.connect("mongodb+srv://BERTOLASSI:<password>@node.ql25wui.mongodb.net/?retryWrites=true&w=majority") // ?retryWrites=true&w=majority= nome projeto

let db =mongoose.connection;

export default db