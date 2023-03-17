const path = require("path");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();
const { response } = require("express");

//the saved city search history
let ProjectData = {
  projectweatherData: {},
  projectimageData: {},
  projectgeoData: {},
};

let savedData = [];

app.use(cors());

//body Parser
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.use(express.static("dist"));

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);


app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});

// server test route
app.get("/test", async (req, res) => {

  try {

    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
            "role": "user",
            "content": "Who is h bagl!"
        }
    ]
      
    });
    return res.status(200).send(response.data.choices[0].message.content)
    return res.status(200).json({
      success: true,
    });
  } catch (er) {
    console.log("***",er)
    return res.status(400).json({
      success: false,
     
    });
  }
});

app.listen(8080,(()=>{
    console.log("hello");
}))
