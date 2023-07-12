const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TestSchema = new mongoose.Schema({
  testId: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    //unique:false,
    required: true,
  },
  marks: {
    type: Number,
    required: true,
  },
  duration: {
    hrs: {
      type: String,
      required: true,
    },
    min: {
      type: String,
      required: true,
    },
  },
  dueDate: {
    type: Date,
    required: true,
  },
  classroom: {
    type: String,
    required: true,
  },
  rules: {
    type: Array,
    required: true,
  },
  questions:{
    type:Array,
    required:true
  },
  scores: {
    type: Array,
    default: [],
  },
},{
    timestamps:true
});

module.exports = mongoose.model("Test", TestSchema, "tests");
