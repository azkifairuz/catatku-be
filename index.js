const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3000;

// Enable CORS for all routes
app.use(cors());

// set body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//set route
//user
// app.use("/api/user", userRoute);
// app.use("/api/post", postRoute);
// app.use("/api/", authRoute, userRoute, postRoute);
// default route
app.get("/", (req, res) => {
  res.send("API catatku");
});
// buat server nya
app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
