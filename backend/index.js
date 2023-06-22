const express = require("express");
const readline = require("readline");
const app = express();
const port = 3000;
const USERS = [];
const QUESTIONS = [
  {
    problemId : "1234",
    title: "Two states",
    description: "Given an array return the maximum of the array",
    testcases: [
      {
        input: "[1,2,3,4,5]",
        output: "5",
      },
    ],
  },
];
const SUBMISSIONS = [];

app.get("/", (req, res) => res.send("Hey , We are new leetcode..."));

app.post("/signup", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).send({ error: "All feilds required" });

  const newUser = {email, password};
  USERS.push(newUser);
  
  res.status(200).send("Success");
});



app.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).send({ error: "All feilds required" });
  
    const validUser = USERS.find(
      (user) => user.email === email && user.password === password)

    if(!validUser)
      return res.status(400).send({ error: "Enter valid credentials" });
      
    const token = `YayWeAreSuccesfullyLoggedIn`;
  res.status(200).send({ message: "Login successful", token });
  res.send("Hello World from route2!");
});




app.get("/questions", (req, res) => {
 res.send(QUESTIONS); 
});



app.get("/submissions", (req, res) => { 
  const { problemId } = req.query;
  const userSubmissions = SUBMISSIONS.filter(
    (sub) => sub.problemId === problemId
  );
  res.status(200).send(userSubmissions);
});



app.post("/submissions", (req, res) => {

  const { problemId, solution } = req.body;
  const isAccepted = Math.random() < 0.5;
  const submission = {
    problemId,
    solution,
    isAccepted,
  };
  SUBMISSIONS.push(submission);
  res.status(200).send({ status: isAccepted ? "accepted" : "rejected" });
});


const authenticate = (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password)
    return res.status(400).send({ error: "All feilds required" });

  if (username !== "admin" || password !== "adminPassword")
    return res.status(401).send("Unauthorized");

  next();
};


app.post("/problemAdd", authenticate, (req, res) => {
  const { problemId, title, description, testCases } = req.body;
  if (!problemId || !title || !description || !testCases)
    return res.status(400).send({ error: "All feilds required" });

  const question = { problemId, title, description, testCases };
  QUESTIONS.push(question);
  res.status(200).send({ status: "Problem added" });
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
