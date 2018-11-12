import $ from "jquery";
import Hello from "./hello.ts";

let hello = new Hello("Hamza!!!");

$("body").append(`greeting: ${hello.greeting()}`);
