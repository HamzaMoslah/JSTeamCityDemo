import $ from "jquery";
import Hello from "./hello.ts";

let hello = new Hello("Hamza Moslah!!!");

$("body").append(`greeting: ${hello.greeting()}`);
