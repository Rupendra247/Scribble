import mongoose  from "mongoose";

// 1- we need to  create a schema
// 2 - create model based of that schemas

 const noteSchemas  = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    content:{
        type: String,
        required: true,
    },
 }, 
  {timestamps: true} // createAt , updateAt
);

const Note = mongoose.model("Note", noteSchemas)

export default Note