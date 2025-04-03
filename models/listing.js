const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSChema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  image: {
    filename: { type: String },
    url: {
      type: String,
      default:
        "https://unsplash.com/photos/rainy-city-street-at-night-with-bright-lights-https://images.unsplash.com/photo-1742183635099-bf6d03fca5c7?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dcoam-W6_tK0",
      set: (v) =>
        v === ""
          ? "https://unsplash.com/photos/rainy-city-street-at-night-with-bright-lights-https://images.unsplash.com/photo-1742183635099-bf6d03fca5c7?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dcoam-W6_tK0"
          : v,
    },
  },
  price: {
    type: Number,
  },
  location: {
    type: String,
  },
  country: {
    type: String,
  },
});

const Listing = mongoose.model("Listing", listingSChema);
module.exports = Listing;
