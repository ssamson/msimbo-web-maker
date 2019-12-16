const express = require("express");
const router = express.Router();
const Website = require("../models/Website");

// const websites = [
//   { _id: "123", name: "Facebook", developerId: "456", description: "Lorem" },
//   { _id: "234", name: "Tweeter", developerId: "456", description: "Lorem" },
//   { _id: "456", name: "Msimbo", developerId: "456", description: "Lorem" },
//   { _id: "890", name: "Go", developerId: "123", description: "Lorem" },
//   { _id: "567", name: "Tic Tac Toe", developerId: "123", description: "Lorem" },
//   { _id: "678", name: "Checkers", developerId: "123", description: "Lorem" },
//   { _id: "789", name: "Chess", developerId: "234", description: "Lorem" }
// ];

// Create website
router.post("/", async (req, res) => {
  const newWebsite = new Website({ ...req.body });
  const website = await newWebsite.save();
  // const newWebsite = req.body;
  // websites.push(newWebsite);
  res.json(website);
});

// Get all websites by given user id
router.get("/user/:uid", async (req, res) => {
  const uid = req.params.uid;
  const currentWebsites = await Website.find({ developerId: uid });
  // const currentWebsites = [];
  // for (let i = 0; i < websites.length; i++) {
  //   if (websites[i].developerId === uid) {
  //     currentWebsites.push(websites[i]);
  //   }
  res.json(currentWebsites);
});

// Get website by given id
router.get("/:wid", async (req, res) => {
  const wid = req.params.wid;
  const website = await Website.findById(wid);
  // let website = null;
  // for (let i = 0; i < websites.length; i++) {
  //   if (websites[i]._id === wid) {
  //     website = websites[i];
  //   }
  res.json(website);
});

// Update website
router.put("/", async (req, res) => {
  const newWebsite = req.body;
  await Website.findByIdAndUpdate(newWebsite._id, newWebsite);
  // for (let i = 0; i < websites.length; i++) {
  //   if (websites[i]._id === newWebsite._id) {
  //     websites[i] = newWebsite;
  //   }
  // }
  res.json(newWebsite);
});

// Delete website
router.delete("/:wid", async (req, res) => {
  const wid = req.params.wid;
  await Website.findByIdAndRemove(wid);
  // for (let i = 0; i < websites.length; i++) {
  //   if (websites[i]._id === wid) {
  //     websites.splice(i, 1);
  //   }
  // }
  res.json(null);
});

module.exports = router;
