const express = require("express");
const router = express.Router();
const Widget = require("../models/Widget");

// const widgets = [
//   {
//     _id: "123",
//     widgetType: "HEADING",
//     pageId: "321",
//     size: 2,
//     text: "GIZMODO"
//   },
//   {
//     _id: "234",
//     widgetType: "HEADING",
//     pageId: "321",
//     size: 4,
//     text: "Lorem ipsum"
//   },
//   {
//     _id: "345",
//     widgetType: "IMAGE",
//     pageId: "321",
//     width: "100%",
//     url:
//       "https://www.gettyimages.ie/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg"
//   },
//   {
//     _id: "567",
//     widgetType: "HEADING",
//     pageId: "321",
//     size: 4,
//     text: "Lorem ipsum"
//   },
//   {
//     _id: "678",
//     widgetType: "YOUTUBE",
//     pageId: "321",
//     width: "100%",
//     url: "https://www.youtube.com/embed/AM2Ivdi9c4E"
//   }
// ];

//create new widget
router.post("/", async (req, res) => {
  const newWidget = new Widget({ ...req.body });
  const widget = await newWidget.save();
  // widgets.push(newWidget);
  // res.json(newWidget);
  res.json(widget);
});

// Get all widgets by given page id
router.get("/page/:pid", async (req, res) => {
  const pid = req.params.pid;
  const currentWidgets = await Widget.find({ pageId: pid });
  // const currentWidgets = [];
  // for (let i = 0; i < widgets.length; i++) {
  //   if (widgets[i].pageId === pid) {
  //     currentWidgets.push(widgets[i]);
  //   }
  // }
  res.json(currentWidgets);
});

// get widgets by given id
router.get("/:wgid", async (req, res) => {
  const wgid = req.params.wgid;
  widget = await Widget.findById(wgid);
  // let widget = null;
  // for (let i = 0; i < widgets.length; i++) {
  //   if (widgets[i]._id === wgid) {
  //     widget = widgets[i];
  //   }
  // }
  res.json(widget);
});

// Update widget
router.put("/", async (req, res) => {
  const newWidget = req.body;
  await Widget.findByIdAndUpdate(newWidget._id, newWidget);
  // for (let i = 0; i < widgets.lengths; i++) {
  //   if (widgets[i]._id === newWidget._id) {
  //     widgets[i] = newWidget;
  //   }
  // }
  res.json(newWidget);
});

// Delete widget
router.delete("/:wgid", async (req, res) => {
  const wgid = req.params.wgid;
  await Widget.findByIdAndRemove(wgid);
  // for (let i = 0; i < widgets.length; i++) {
  //   if (widgets[i]._id === wgid) {
  //     widgets.splice(i, 1);
  //   }
  // }
  res.json(null);
});

module.exports = router;
