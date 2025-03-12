import { Schema, model } from "mongoose";

const exampleSchema = Schema({
  name: String,
  description: String,
});

export default model("Example", exampleSchema);
