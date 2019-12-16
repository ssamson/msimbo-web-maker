const express = require("express");
const router = express.Router();
const Page = require("../models/Page");

// const pages = [
//   { _id: "321", name: "Post 1", websiteId: "456", title: "Lorem" },
//   { _id: "432", name: "Post 2", websiteId: "456", title: "Lorem" },
//   { _id: "543", name: "Post 3", websiteId: "456", title: "Lorem" }
// ];

// Create new page
router.post("/", async (req, res) => {
  const newPage = new Page({ ...req.body });
  // console.log(req.body);
  // const newPage = new Page({ ...req.body });
  const page = await newPage.save();
  // pages.push(newPage);
  res.json(page);
  // res.json(null);
});

// Get all pages by given website id
router.get("/website/:wid", async (req, res) => {
  const wid = req.params.wid;
  currentPages = await Page.find({ websiteId: wid });
  // const currentPages = [];
  // for (let i = 0; i < pages.length; i++) {
  //   if (pages[i].websiteId === wid) {
  //     currentPages.push(pages[i]);
  //   }
  // }
  res.json(currentPages);
});

// Find Page By Id (load information for page by given id)

router.get("/:pid", async (req, res) => {
  const pid = req.params.pid;
  page = await Page.findById(pid);
  // let page = null;
  // for (let i = 0; i < pages.length; i++) {
  //   if (pages[i]._id === pid) {
  //     page = pages[i];
  //   }
  // }
  res.json(page);
});

// UpdatePage
router.put("/", async (req, res) => {
  const newPage = req.body;
  await Page.findByIdAndUpdate(newPage._id, newPage);
  // for (let i = 0; i < pages.length; i++) {
  //   if (pages[i]._id === newPage._id) {
  //     pages[i] = newPage;
  //   }
  // }
  res.json(newPage);
});

// Delete page
router.delete("/:pid", async (req, res) => {
  const pid = req.params.pid;
  await Page.findByIdAndRemove(pid);
  // for (let i = 0; i < pages.length; i++) {
  //   if (pages[i]._id === pid) {
  //     pages.splice(i, 1);
  //   }
  // }
  res.json(null);
});
module.exports = router;
