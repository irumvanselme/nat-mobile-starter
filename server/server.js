import dotenv from "dotenv";

dotenv.config();

import "./config/db.config.js";

import { Application } from "./application.js";

var app = new Application();

app.run();
