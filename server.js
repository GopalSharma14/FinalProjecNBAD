require("dotenv").config();

const express = require("express");
const axios = require("axios");


const app = express();
const mongoose = require("mongoose");
const Expenses = require("./userExpense");
const { ObjectId } = require("mongodb");
const bodyParser = require("body-parser");

const cors = require("cors");

mongoose.connect("mongodb+srv://dbUser:dbUser@cluster0.m00vs.mongodb.net/expenses?retryWrites=true&w=majority", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.get("/expenses/:uname", function (req, res) {
  Expenses.find({ username: req.params.uname })
    .then((userFound) => {
      if (!userFound) {
        return res.status(404).json("Something went wrong");
      }
      return res.status(200).json(userFound);
    })
    .catch((mongooseErr) => {
      res.status("200").send(mongooseErr);
    });
});
app.post("/expenses/", function (req, res) {
  console.log("id: ", req.body.id);

  Expenses.findById(req.body.id)
    .then((expenseFound) => {
      console.log(expenseFound);
      if (!expenseFound) {
        return res.status(404).json("Something went wrong");
      }
      return res.status(200).json(expenseFound);
    })
    .catch((mongooseErr) => {
      res.status("200").send(mongooseErr);
    });
});

//Add new expense data
app.post("/add-expenses", function (req, res) {
  let addData = {
    username: req.body.username,
    title: req.body.title,
    amount: req.body.amount,
    category: req.body.category,
    date: req.body.date,
  };

  Expenses.create(addData)
    .then((data) => {
      data = data.save();
      res.json(data);
    })
    .catch((mongooseErr) => {
      res.status("200").send(mongooseErr);
    });
});

//Delete
app.post("/deleteData", function (req, res) {
  // var oid = 'ObjectId("' + req.body.id + '")';
  console.log(req.body.id);
  Expenses.findByIdAndDelete(
    req.body.id,
    { useFindAndModify: false },
    function (err) {
      if (err) {
        res.send(err);
      }
    }
  );
});

//Get aggregate of Category
app.post("/catData", function (req, res) {
  console.log("username: " + req.body.username);
  var pipeline = [
    {
      $match: {
        username: req.body.username,
      },
    },

    {
      $group: {
        _id: "$category",
        total: {
          $sum: "$amount",
        },
      },
    },
  ];

  Expenses.aggregate(pipeline).exec(function (err, result) {
    if (err) {
      console.log(err);
      return;
    }
    console.log(result);
    res.json(result);
  });
});

app.post("/dataUpdate", function (req, res) {
  let addData = {
    $set: {
      username: req.body.username,
      title: req.body.title,
      amount: req.body.amount,
      category: req.body.category,
      date: req.body.date,
    },
  };

  Expenses.findByIdAndUpdate(
    req.body.id,
    addData,
    { useFindAndModify: false },
    function (err) {
      if (err) {
        res.send(err);
      }
    }
  );
});

app.listen(3000, () => console.log("Server Started"));
