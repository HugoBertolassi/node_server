import mongoose from "mongoose"

mongoose.connect("mongodb+srv://BERTOLASSI:RFh6kw1yGxeTu7Uq@node.ql25wui.mongodb.net/NODE");
//mongoose.connect("mongodb+srv://BERTOLASSI:RFh6kw1yGxeTu7Uq@node.ql25wui.mongodb.net/?retryWrites=true&w=majority")

let db =mongoose.connection;

export default db