import $ from "jquery";
import Hello from "./hello.ts";

let hello = new Hello("Jamila!!!");

$("body").append(`greeting: ${hello.greeting()}`);
