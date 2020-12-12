import * as $ from "jquery";
import Post from "@models/Post";
import "./styles/styles.css";
import json from "./assets/json";

const post = new Post("Post title");

console.log("Post to strign" + post.toString());

$("pre").html("<h1>FOREVER</h1>");

console.log(json);
