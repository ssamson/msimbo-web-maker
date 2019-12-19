const express = require("express");
const router = express.Router();

const User = require("../models/User");

// const users = [
//   {
//     _id: "123",
//     username: "alice",
//     password: "alice",
//     firstName: "Alice",
//     lastName: "Wonder",
//     email: "alice@gmail.com"
//   },
//   {
//     _id: "234",
//     username: "bob",
//     password: "bob",
//     firstName: "Bob",
//     lastName: "Marley",
//     email: "bob@whatever.com"
//   },
//   {
//     _id: "345",
//     username: "charly",
//     password: "charly",
//     firstName: "Charly",
//     lastName: "Garcia",
//     email: "charly@ulem.com"
//   },
//   {
//     _id: "456",
//     username: "shiyu",
//     password: "shiyu",
//     firstName: "Shiyu",
//     lastName: "Wang",
//     email: "swang@ulem.org"
//   }
// ];

// Find user by credentials
router.get("/", async (req, res) => {
  // get username and password that user enter
  const username = req.query.username;
  const password = req.query.password;
  let user;
  // if username and password are sent from client
  if (username && password) {
    // for (let i = 0; i < users.length; i++) {
    user = await User.findOne({ username: username, password: password });
    // if we found a user with given username and password
    //   if (users[i].username === username && users[i].password === password) {
    //     user = users[i];
    //   }
    // }
    // if the username is taken
  } else if (username) {
    user = await User.findOne({ username: username });
    // for (let i = 0; i < users.length; i++) {
    //   if (users[i].username === username) {
    //     user = users[i];
  }

  // if user is not existing
  if (!user) {
    user = null;
  }
  // send user back to client
  res.json(user);
});

// Create new user
router.post("/", async (req, res) => {
  // const userToSave = new User({
  //   username: newUser.username,
  //   password: newUser.password,
  //   firstName: newUser.firstName,
  //   lastName: newUser.lastName,
  //   email: newUser.email
  // });
  const userToSave = new User({ ...req.body });
  const user = await userToSave.save();
  // const user = await newUser.save();

  // if (newUser.password.length < 6) {
  //   res.json("password is too short");
  // }

  // save to database
  // users.push(newUser);
  // res.json(newUser);
  res.json(user);
});

// Find user by id
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const user = await User.findById(id);
  // let user = null;
  // for (let i = 0; i < users.length; i++) {
  //   if (users[i]._id === id) {
  //     user = users[i];
  //   }
  // }
  res.json(user);
});

// Update user
router.put("/", async (req, res) => {
  const newUser = req.body;
  await User.findByIdAndUpdate(newUser._id, newUser);
  // for (let i = 0; i < users.length; i++) {
  //   if (users[i]._id === newUser._id) {
  //     users[i] = newUser;
  //   }
  // }
  res.json(newUser);
});
// send hello to client
// router.get("/", (req, res) => {
//   res.json("Hello from server");
// });

// router.get("/123", (req, res) => {
//   res.json("hello from 123");
// });

module.exports = router;
