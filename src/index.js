// JS Goes here - ES6 supported
import React from "react";
import ReactDOM from "react-dom";
import { Tina, TinaCMS, Form } from "tinacms";
import { GitClient } from "@tinacms/git-client";

import "./css/main.css";

// Say hello

const target = document.createElement("div");
document.body.prepend(target);

window.tinacms = new TinaCMS();

const client = new GitClient("http://localhost:8080/___tina");
window.tinacms.registerApi("git", client);
window.TinaForm = Form;
ReactDOM.render(<Tina cms={window.tinacms} />, target);
