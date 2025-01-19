import mongoose from "mongoose";

const TemplateSchema = new mongoose.Schema({
  data: {
    type: Object, 
    required: true, 
  },
})

const Template = mongoose.model("Template", TemplateSchema);

export default Template;
