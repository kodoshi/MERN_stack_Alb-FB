const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 100,
  },

  body: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 1000,
  },

  photo: {
    //image will be seen first in frontend and it will take a bit to be received in the
    //backend, so it will be saved in this buffer, will not throw error if not implemented. Buffer=binary data format
    data: Buffer, 
    
    //will hold the format of the picture uploaded
    contentType: String, 
  },

  posted_by: {
    type: mongoose.Schema.ObjectId, //user id that the post belongs to
    ref: "User", //Many-To-One relation established to the User schema
  },

  created_at: {
    type: Date,
    default: Date.now,
  },

  updated_at: {
    type: Date,
  },

  likes: [{ type: mongoose.Schema.ObjectId, ref: "User" }],

  comments: [
    {
      text: String,
      created_at: { type: Date, default: Date.now },
      posted_by: { type: mongoose.Schema.ObjectId, ref: "User" },
    },
  ],
});

module.exports = mongoose.model("Post", postSchema);
