import express from "express";
import cors from "cors";
import upload from "./middleware/upload.js";
import Call from "./model/call.model.js";
import dotenv from "dotenv";
import connectDatabase from "./config/database.js";
import path from "path";
import whisper from "whisper-node";

dotenv.config();

const app = express();
connectDatabase();

app.use(cors());

app.post("/api/upload", upload.single("audio"), async (req, res) => {
  console.log(req.file);

  // transcription logic
  const audioFilePath = req.file.path;

  const filePath = path.resolve(audioFilePath);

  const options = {
    modelName: "base", // default
    // modelPath: "/custom/path/to/model.bin", // use model in a custom directory (cannot use along with 'modelName')
    whisperOptions: {
      language: "auto", // default (use 'auto' for auto detect)
      gen_file_txt: true, // outputs .txt file
      gen_file_subtitle: false, // outputs .srt file
      gen_file_vtt: false, // outputs .vtt file
      word_timestamps: true, // timestamp for every word
      // timestamp_size: 0      // cannot use along with word_timestamps:true
    },
  };
  const result = await whisper(filePath, options);

  console.log(result);
  
  const data = {
    fileName: req.file.filename,
    duration: "1",
    transcription:
      "Sample transcription Sample transcription Sample transcription",
    analytics: {},
  };

  const save = await Call.create(data);

  res.json(save);
});

app.get("/api/calls", async (req, res) => {
  const data = [];

  const calls = await Call.find();

  res.json(calls);
});

app.get("/api/analytics/:id", (req, res) => {
  const data = {};

  res.json(data);
});

app.listen(8000, () => console.log("server listening on port 8000"));
