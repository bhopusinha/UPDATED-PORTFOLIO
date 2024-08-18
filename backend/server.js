const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Message=require('./sbSchema');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

dotenv.config();

mongoose.connect(process.env.DB).then((host)=>{
    console.log(`database is connected to ${host.connection.host}`);
}).catch((er)=>{
    console.log(er);
})

const PORT = process.env.PORT || 5000;

app.post("/send", async (req, res) => {
  const { name, message } = req.body;

  if (!name || !message) {
    return res.status(400).json({ msg: "Please provide all required fields" });
  }

  try {

    const newMessage =new Message({
        name,message
     })
   
     await newMessage.save();

    res.status(200).json({ msg: "Message sent successfully!" });

  } catch (error) {
    console.error("Error sending message:", error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
